# Denos' eggs AKA deggs

This should be a remake of [penguins'eggs](https://github.com/pieroproietti/penguins-eggs) made with [deno](https://deno.com/).

NOTE: At the moment this is just a work in progress...

## install deno

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Manually add the directory to your `$HOME/.bashrc`` (or similar)
```
export DENO_INSTALL="/home/artisan/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```
                                     

## install autocomplete deno
```
deno completions bash > deno.bash
sudo mkdir /usr/local/etc/bash_completion.d -p
sudo mv deno.bash /usr/local/etc/bash_completion.d/deno.bash
```

Add to `.bashrc` the row:
```
source /usr/local/etc/bash_completion.d/deno.bash
```

## create autocomplete

```
cd denos-eggs
deno compile src/deggs.ts
sudo ln -s /home/artisan/denos-eggs/deggs /usr/local/bin
```
At this point we construct `deggs.bash`:
```
deggs autocomplete bash > deggs.bash
sudo mv deggs.bash /usr/local/etc/bash_completion.d/
```
Add to `.bashrc` row:
```
source /usr/local/etc/bash_completion.d/deggs.bash
```

## vscode

File->Preferences->Extensions->deno

Then enable deno for the workspace.

## src
I am currently trying to build just cells.ts which should use [cliffy](https://cliffy.io/) to implement the various eggs commands and build the file for autocomplete.

## Autocomplete
On the autocomplete command has been associated `CompletionCommand()` which generates the autocomplete for `bash`, `zsh` and `fish`.

### Create and install autocomplete
* `cd`
* `deggs autocomplete bash > deggs.bash`
* `sudo mv deggs.bash /usr/local/etc/bash_completion.d/`

It is necessary, finally, to add in `~/.bashrc`:

```
source /usr/local/etc/bash_completion.d/deggs.bash
```
