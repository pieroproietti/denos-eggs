# Denos' eggs

This should be a remake of [penguins'eggs](https://github.com/pieroproietti/penguins-eggs) made with [deno]().

NOTE: This is a work in progress...

## install deno

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Manually add the directory to your $HOME/.bashrc (or similar)
```
e                                                                                                                                           

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
deno compile src/cells.ts
sudo ln -s /home/artisan/denos-eggs/cells /usr/local/bin
```


At this point we construct `cells.bash`:
```
cells autocomplete bash > cells.bash
sudo mv cells.bash /usr/local/etc/bash_completion.d/
```
Add to `.bashrc` row:
```
source /usr/local/etc/bash_completion.d/cells.bash
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
* `cells autocomplete bash > cells.bash`
* `sudo mv cells.bash /usr/local/etc/bash_completion.d/`

It is necessary, finally, to add in `~/.bashrc`:

```
source /usr/local/etc/bash_completion.d/eggs.bash
```
