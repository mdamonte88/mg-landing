# Configuración de Secrets para Deploy en GitHub Actions

Este documento describe los secretos necesarios para ejecutar correctamente el workflow de despliegue hacia DigitalOcean desde GitHub Actions.

## Ubicación

En GitHub:

1. Ir al repositorio.
2. Seleccionar **Settings**.
3. Ir a **Secrets and variables** → **Actions**.
4. Crear los siguientes secretos.

---

## Secrets requeridos

### DO_HOST

IP o dominio del servidor DigitalOcean.

**Ejemplo:**

```text
167.99.xxx.xxx
```

o

```text
mgarquitectura.com
```

---

### DO_USER

Usuario SSH utilizado para conectarse al servidor.

**Ejemplo:**

```text
root
```

o

```text
duenoalquila
```

---

### DO_PORT

Puerto SSH configurado en el servidor.

Normalmente:

```text
22
```

---

### DO_SSH_KEY

Clave privada SSH utilizada para acceder al servidor.

Debe copiarse el contenido completo del archivo de clave privada:

```bash
cat ~/.ssh/id_rsa
```

o

```bash
cat ~/.ssh/do_deploy
```

Copiar todo el contenido:

```text
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

y guardarlo como valor del secret `DO_SSH_KEY`.

---

## Secret opcional

### BLUDCODE_SSH_KEY

Solo es necesario si el proyecto necesita acceder a repositorios privados de GitHub mediante SSH.

Por ejemplo, para instalar dependencias desde repositorios privados como:

```text
git@github.com:mdamonte88/bludcode-landing-ui.git
```

### Obtener la clave privada

En la máquina donde se generó la llave:

```bash
cat ~/.ssh/github-actions-bludcode
```

Copiar todo el contenido:

```text
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

y crear el secret:

```text
BLUDCODE_SSH_KEY
```

### Obtener la clave pública asociada

```bash
cat ~/.ssh/github-actions-bludcode.pub
```

Ejemplo:

```text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... github-actions-bludcode
```

### Configurar la Deploy Key en GitHub

Para cada repositorio privado que deba ser accedido por GitHub Actions:

1. Ir al repositorio privado.
2. Entrar en **Settings** → **Deploy keys**.
3. Seleccionar **Add deploy key**.
4. Pegar el contenido de `github-actions-bludcode.pub`.
5. Asignar un nombre descriptivo.
6. Si el workflow solo necesita leer el repositorio, dejar desmarcado **Allow write access**.
7. Guardar.

### Uso en GitHub Actions

```yaml
- name: Start SSH agent
  uses: webfactory/ssh-agent@v0.9.0
  with:
    ssh-private-key: ${{ secrets.BLUDCODE_SSH_KEY }}
```

### Verificación

Agregar temporalmente este paso:

```yaml
- name: Debug SSH
  run: |
    ssh -o StrictHostKeyChecking=no -T git@github.com || true
    git ls-remote git@github.com:mdamonte88/bludcode-landing-ui.git
```

Si aparecen referencias (`refs/heads/main`, etc.), la configuración es correcta.

---

## Verificación de acceso SSH al servidor

Agregar temporalmente el siguiente paso al workflow para validar la configuración:

```yaml
- name: Test SSH
  uses: appleboy/ssh-action@v1.0.3
  with:
    host: ${{ secrets.DO_HOST }}
    username: ${{ secrets.DO_USER }}
    key: ${{ secrets.DO_SSH_KEY }}
    port: ${{ secrets.DO_PORT }}
    script: |
      whoami
      hostname
      pwd
```

Resultado esperado:

```text
duenoalquila
droplet-01
/home/duenoalquila
```

---

## Uso en GitHub Actions

### Upload de archivos al servidor

```yaml
- name: Upload build to server
  uses: appleboy/scp-action@v0.1.7
  with:
    host: ${{ secrets.DO_HOST }}
    username: ${{ secrets.DO_USER }}
    key: ${{ secrets.DO_SSH_KEY }}
    port: ${{ secrets.DO_PORT }}
    source: "dist/*"
    target: /var/www/mgarquitectura.com
```

### Ejecución de comandos remotos

```yaml
- name: Reload PM2
  uses: appleboy/ssh-action@v1.0.3
  with:
    host: ${{ secrets.DO_HOST }}
    username: ${{ secrets.DO_USER }}
    key: ${{ secrets.DO_SSH_KEY }}
    port: ${{ secrets.DO_PORT }}
    script: |
      pm2 restart mgarquitectura.com --update-env
```

---

## Troubleshooting

### Error

```text
ssh: handshake failed: ssh: unable to authenticate
```

Verificar:

- `DO_SSH_KEY` contiene una clave privada válida.
- La clave pública correspondiente está presente en:

```bash
~/.ssh/authorized_keys
```

- `DO_USER` es el usuario correcto.
- `DO_HOST` apunta al servidor correcto.
- `DO_PORT` coincide con la configuración SSH del servidor.

### Error al acceder a un repositorio privado

```text
Permission denied (publickey)
fatal: Could not read from remote repository
```

Verificar:

- El secret `BLUDCODE_SSH_KEY` está configurado.
- La clave pública (`github-actions-bludcode.pub`) fue agregada como Deploy Key.
- La Deploy Key fue agregada al repositorio correcto.
- El workflow ejecuta `webfactory/ssh-agent`.

### Error de permisos en el servidor

```text
permission denied
```

Verificar permisos sobre el directorio destino:

```bash
ls -ld /var/www/mgarquitectura.com
```

y confirmar que el usuario definido en `DO_USER` tiene acceso de escritura.

---

## Resumen

| Secret | Descripción |
|----------|-------------|
| DO_HOST | Host/IP del servidor |
| DO_USER | Usuario SSH |
| DO_PORT | Puerto SSH |
| DO_SSH_KEY | Clave privada SSH del servidor |
| BLUDCODE_SSH_KEY | Acceso a repositorios privados de GitHub |