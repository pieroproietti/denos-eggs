# Denos eggs

Questo dovrebbe essere un rifacimento di eggs fatto con deno. 

## install deno

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Manually add the directory to your $HOME/.bashrc (or similar)
```
e                                                                                                                                           

## autocomplete deno
```
deno completions bash > deno.bash
sudo mkdir /usr/local/etc/bash_completion.d -p
sudo mv deno.bash /usr/local/etc/bash_completion.d/deno.bash
```

Aggiungere a `.bashrc` la riga:
```
source /usr/local/etc/bash_completion.d/deno.bash
```

## link ed autocomplete

```
cd denos-eggs
deno compile src/cells.ts`
sudo ln -s /home/artisan/denos-eggs/cells /usr/local/bin
```

A questo punto costruiamo cells.bash

```
cells autocomplete bash > cells.bash
sudo mv cells.bash /usr/local/etc/bash_completion.d/
```
Aggiungere a `.bashrc` la riga:
```
source /usr/local/etc/bash_completion.d/cells.bash
```

## vscode

File->Preferences->Extensions->deno

Then enable deno for the workspace.

## src

Al momento sto cercando di costruire solo eggs.ts che dovrebbe utilizzare [cliffy](https://cliffy.io/) per implementare i vari comandi di eggs e costruire il file per l'autocomplete.

I comando sono già stati suddivisi in sottomenu, create: exportCommand, toolsCommand e wardrobeCommand.

# Avvio del programma
Volendo sperimentare l'autocomplete che, sembra non preveda l'uso del suffisso, ho semplicemente create un link denominato `eggs` che punta a `/home/artisan/cells/src/eggs.ts`

## Autocomplete
Sul comando autocomplete è stato associato `CompletitionCommand()` che genera l'autocomplete per `bash`, `zsh` e `fish`.

### Creazione ed installazione autocomplete
* `cd`
* `eggs autocomplete bash > eggs.bash`
* `sudo mv eggs.bash /usr/local/etc/bash_completion.d/`

Occorre, infine aggiungere in `~/.bashrc`:

```
source /usr/local/etc/bash_completion.d/eggs.bash
```
