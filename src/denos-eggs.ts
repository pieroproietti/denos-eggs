#!/usr/bin/env -S deno run --allow-all

import { Command, CompletionsCommand } from "./deps.ts";
import { exec } from "./deps.ts";

/**
 * FIRST: we define submenus
 */

/**
 * toolsCommand
 */
const toolsCommand = new Command()
  .description("tools menu")
  /**
   * tools ppa-
   */
  .command("ppa")
  .description("add/remove repository penguins-eggs")
  .usage("[-add] [--remove]")
  .option("-a, --add", "add penguins-eggs PPA repository")
  .option("-r, --remove", "remove penguins-eggs PPA repository")
  .option("-n, --nointeractive", "no user interaction")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    const p = args[0];
    let flags = "";
    if (p.add) {
      flags += " --add";
    }
    if (p.remove) {
      flags += " --remove";
    }
    if (p.remove) {
      flags += " --remove";
    }
    if (p.nointeractive) {
      flags += " --nointeractive";
    }
    if (p.verbose) {
      flags += " --verbose";
    }
    const cmd = `eggs tools ppa ${flags}`
    console.log(cmd)
  })
  /**
   * tools skel
   */
  .command("skel")
  .description("Update skel from home configuration")
  .usage("--user artisan")
  .option("-u, --user <user>", "User to be used for copy")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    const p = args[0];
    let flags = "";
    if (p.user) {
      flags += " --user" + p.user;
    }
    if (p.verbose) {
      flags += " --verbose";
    }
    const cmd = `eggs tools skel ${flags}`
    console.log(cmd)
  })
  /**
   * tools stat
   */
  .command("stat")
  .description("get statistics from sourceforge")
  .usage("[--month] [--year]")
  .option("-m, --month", "current month")
  .option("-y, --year", "currend year")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    const p = args[0];
    let flags = "";
    if (p.month) {
      flags += " --month";
    }
    if (p.year) {
      flags += " --year";
    }
    if (p.verbose) {
      flags += " --verbose";
    }
    const cmd = `eggs tools stat ${flags}`
    console.log(cmd)
  })
  /**
   * tools yolk
   */
  .command("yolk")
  .description("configure eggs to install without internet")
  .usage("")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    let p = args[0];
    let flags = "";
    if (p.verbose) {
      flags = " --verbose";
    }
    const cmd = `eggs yolk ${flags}`
    console.log(cmd)
  });
/**
 * exportCommand
 */
const exportCommand = new Command()
  .description("export menu")
  /**
   * export deb
   */
  .command("deb")
  .description("export deb")
  .usage("[--all] [--clean]")
  .option("-a, --all", "All packages")
  .option("-c, --clean", "Clean old packages.")
  .option("-v, --verbose", "Show verbose.")
  .action((...args) => {
    let p = args[0];
    let flags = "";
    if (p.all) {
      flags += " --all";
    }
    if (p.clean) {
      flags += " --clean";
    }
    if (p.verbose) {
      flags += " --verbose";
    }
    const cmd = `eggs export deb ${flags}`
    console.log(cmd)
  })
  /**
   * export iso
   */
  .command("iso")
  .description("export iso")
  .usage("[--clean]")
  .option("-c, --clean", "Clean old images")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    let p = args[0];
    let flags = "";
    if (p.clean) {
      flags += " --clean";
    }
    if (p.verbose) {
      flags += " --verbose";
    }
    const cmd = `eggs export iso ${flags}`
    console.log(cmd)
  })
  /**
   * export pkg
   */
  .command("pkg")
  .description("export pkg")
  .usage("[--clean]")
  .option("-c, --clean", "Clean old pkgs")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    let p = args[0];
    let flags = "";
    if (p.clean) {
      flags += " --clean";
    }
    if (p.verbose) {
      flags += " --verbose";
    }
    const cmd = `eggs export pkg ${flags}`
    console.log(cmd)
  });
/**
 * wardorbeCommand
 */
const wardrobeCommand = new Command()
  .description("wardrobe menu")
  /**
   * wardrobe get
   */
  .command("get")
  .description("get warorobe")
  .usage("[repo]")
  .arguments("[repo:string]") // <> required / [] optional
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    const p = args[0];
    let flags = "";
    if (p.verbose) {
      flags += " --verbose";
    }
    const repo = args[1];
    const cmd = `eggs wargrobe get ${repo} ${flags}`
    console.log(cmd)
  })
  /**
   * wardrobe list
   */
  .command("list")
  .description("list costumes, accessoires and configs in wardrobe")
  .usage("")
  .option("-w, --wardrobe=<name:string>", "Select wardrobe <name>")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    const p = args[0];
    let flags = "";
    if (p.wardrobe) {
      flags += "  --wardorbe=" + p.wardrobe;
    }
    if (p.verbose) {
      flags += "  --verbose";
    }
    const cmd = `eggs wardrobe list ${p.wardrobe}`
    console.log(cmd)
  })
  /**
   * wardrobe show
   */
  .command("show")
  .description("show costumes/accessories in wardrobe")
  .usage("[--wardrobe=name] [json]")
  .option("-j, --json", "Output JSON")
  .option("-w, --wardrobe=<name:string>", "Select wardrobe <name>")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    const p = args[0];
    let flags = "";
    if (p.wardrobe) {
      flags += ` --wardrobobe ${p.wardrobe}`;
    }
    if (p.json) {
      flags = " --json";
    }
    if (p.verbose) {
      flags = " --verbose";
    }
    const cmd = `eggs wardrobe show ${flags}`
    console.log(cmd)
  })
  /**
   * wardrobe wear
   */
  .command("wear")
  .arguments("[costume:string]") // <> required / [] optional
  .description("wear costume/accessories from wardrobe")
  .usage("")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    let p = args[0];
    let flags = "";
    if (p.verbose) {
      flags += " --verbose";
    }
    let costume = "colibri";
    if (args[1] !== undefined) {
      costume = args[1];
    }
    const cmd = `eggs wargrobe wear ${costume} ${flags}`
    console.log(cmd)
  });

/**
 * THEN: we define main menu
 */

/** */
await new Command()
  .name("deggs")
  .description("E G G S: the reproductive system of penguins")
  .version("v0.0.1")
  .command("export", exportCommand)
  .command("tools", toolsCommand)
  .command("wardrobe", wardrobeCommand)
  /**
   * adapt
   */
  .command("adapt")
  .description("adapt viewport")
  .usage("")
  .option("-v, --verbose", "Show verbose")
  .action(() => {
    exec("adapt");
  })
  /**
   * analyze
   */
  .command("analyze")
  .description("analyze")
  .usage("")
  .option("-v, --verbose", "Show verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.verbose) {
      flags += ' --verbose'
    }
    const cmd = `eggs analyze ${flags}`
    console.log(cmd)
  })
  /**
   * autocomplete
   */
  .command("autocomplete", new CompletionsCommand())
  /**
   * calamares
   */
  .command("calamares")
  .description("Install/remove/configure calamares GUI system installer")
  .usage("[--install] [--remove] [--release]")
  .option("-N, --noicons", "no icons")
  .option("-i, --install", "install calamares and its dependencies")
  .option("-n, --nointeractive", "no user interaction")
  .option("-r, --release", "force remove calamares after installation")
  .option("-v, --verbose", "Show verbose")
  .option("--remove", "uninstall calamares and its dependencies")
  .option("--theme=<value>", "theme/branding for eggs and calamares")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.noicons) {
      flags += ' --noicons'
    }
    if (p.install) {
      flags += ' --install'
    }
    if (p.nointeractive) {
      flags += ' --nointeractive'
    }
    if (p.release) {
      flags += ' --release'
    }
    if (p.remove) {
      flags += ' --remove'
    }
    if (p.theme) {
      flags += ' --theme=' + p.theme
    }

    if (p.verbose) {
      flags += ' --verbose'
    }
    const cmd = `eggs calamares ${flags}`
    console.log(cmd)
  })

  /**
   * config
   */
  .command("config")
  .description("Configure and install prerequisites packages to run it")
  .usage("[--clean]")
  .option("-N, --noicons", "no icons")
  .option("-c, --clean", "remove old configuration before to create new one")
  .option("-n, --nointeractive", "no user interaction")
  .option("-v, --verbose", "verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.noicons) {
      flags += ` --noicons`
    }
    if (p.clean) {
      flags += ` --clean`
    }
    if (p.nointeractive) {
      flags += ` --nointeractive`
    }
    if (p.verbose) {
      flags += ` --verbose`
    }
    const cmd = `eggs config ${flags}`
    console.log(cmd)
  })
  /**
   * cuckoo
   */
  .command("cuckoo")
  .description("PXE start with proxy-dhcp")
  .usage("")
  .option("-v, --verbose", "verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.verbose) {
      flags += ' --verbose'
    }
    const cmd = `eggs cmd ${flags}`
    console.log(cmd)
  })
  /**
   * dad
   */
  .command("dad")
  .description("ask help from daddy - TUI configuration helper")
  .usage("[--clean] [--default]")
  .option("-c, --clean", "remove old configuration before to create")
  .option("-d, --default", "remove old configuration and force default")
  .option("-v, --verbose", "verbose")
  .action((...args) => {
    const p = args[0]
    let flags = "";
    if (p.clean) {
      flags += " --clean";
    }
    if (p.default) {
      flags += " --default";
    }
    if (p.verbose) {
      flags += " --verbose";
    }
    const cmd = `eggs dad ${flags}`
    console.log(cmd)
  })
  /**
   * help
   */
  .command("help")
  .description("Display help for eggs")
  .usage("eggs --help")
  /**
 * kill
 */
  .command("kill")
  .description("kill the eggs/free the nest")
  .usage("[--nointeractive]")
  .option("-n, --nointeractive", "non interactive")
  .option("-v, --verbose", "Verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.nointeractive) {
      flags += ' --nointeractive'
    }
    if (p.verbose) {
      flags += ' --verbose'
    }
    const cmd = `eggs kill ${flags}`
    console.log(cmd)
  })
  /**
   * krill
   */
  .command("krill")
  .description("a simple TUI system installer")
  .usage("")
  .option("-H, --halt", "Halt the system after installation")
  .option("-N, --none", "Swap none: 256M")
  .option("-S, --suspend", "Swap suspend: RAM x 2")
  .option("-c, --custom=<value>", "custom unattended configuration")
  .option("-d, --domain=<value>", "Domain name, defult: .local")
  .option("-i, --ip", "hostname as ip, eg: ip-192-168-1-33")
  .option("-k, --crypted", "Crypted CLI installation")
  .option("-n, --nointeractive", "no user interaction")
  .option("-p, --pve", "Proxmox VE install")
  .option("-r, --random", "Add random to hostname, eg: colibri-ay412dt")
  .option("-s, --small", "Swap small: RAM")
  .option("-u, --unattended", "Unattended installation")
  .option("-v, --verbose", "Verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.halt) {
      flags += ' --halt'
    }
    if (p.none) {
      flags += ' --none' //  "Swap none: 256M"
    }
    if (p.suspend) {
      flags += ' --suspend' //  "Swap suspend: RAM x 2"
    }
    if (p.custom) {
      flags += ' --custom=' + p.custom //  "custom unattended configuration")
    }
    if (p.domain) {
      flags += ' --domain=' + p.domain //  "Domain name, defult: .local")
    }
    if (p.ip) {
      flags += ' --ip=' // "hostname as ip, eg: ip-192-168-1-33")
    }
    if (p.crypted) {
      flags += ' --crypted'
    }
    if (p.nointeractive) {
      flags += ' --nointeractive'
    }
    if (p.pve) {
      flags += ' --pve'
    }
    if (p.random) {
      flags += ' --random' // "Add random to hostname, eg: colibri-ay412dt")
    }
    if (p.small) {
      flags += ' --small' // "Swap small: RAM")
    }
    if (p.unattended) {
      flags += ' --unattended' // "Unattended installation"
    }
    if (p.verbose) {
      flags += ' --verbose' // "verbose"
    }
    const cmd = `eggs install ${flags}`
    console.log(cmd)
  })
  /**
   * mom
   */
  .command("mom", "ask help from mommy - TUI helper")
  .usage("")
  .action((...args) => {
    const p = args[0]
    const cmd = `eggs mom`
    console.log(cmd)
  })
  /**
   * produce
   */
  .command("produce")
  .description("produce a live image from your system whithout your data")
  .option("-C, --cryptedclone", "crypted clone")
  .option("-N, --noicons", "no icons on desktop")
  .option("-c, --clone", "clone")
  .option("-f, --standard", "standard compression")
  .option("-m, --max", "max compression")
  .option("-n, --nointeractive", "no user interaction")
  .option("-p, --prefix=<value>", "prefix")
  .option("-s, --script", "script mode. Generate scripts to manage iso build")
  .option("-y, --yolk", "-y force yolk renew")
  .option(
    "--addons=<value>",
    "addons to be used: adapt, ichoice, pve, rsupport",
  )
  .option("--basename=<value>", "basename")
  .option(
    "--release",
    "release: max compression, remove penguins-eggs and calamares after installation",
  )
  .option(
    "--theme=<value>",
    "theme for livecd, calamares branding and partitions",
  )
  .option("-v, --verbose", "verbose")
  .action((...args) => {
    let p = args[0];
    let flags = "";
    if (p.cryptedclone) {
      flags += " --cryptedclone";
    }
    if (p.noicons) {
      flags += " --noicons";
    }
    if (p.clone) {
      flags += " --clone";
    }
    if (p.standard) {
      flags += " --standard";
    }
    if (p.max) {
      flags += " --max";
    }
    if (p.nointeractive) {
      flags += " --nointeractive";
    }
    if (p.prefix) {
      flags += " --prefix " + p.prefix;
    }
    if (p.script) {
      flags += " --script";
    }
    if (p.yolk) {
      flags += " --yolk";
    }
    if (p.addons) {
      flags += " --addons " + args[0].addons;
    }
    if (p.basename) {
      flags += " --basename " + p.basename;
    }
    if (p.release) {
      flags += " --release";
    }
    if (p.theme) {
      flags += " --theme=" + p.theme;
    }
    if (p.verbose) {
      flags += " --verbose";
    }
    const cmd = `eggs produce ${flags}`
    console.log(cmd)
  })
  /**
   * status
   */
  .command("status")
  .description("informations about eggs status")
  .option("-v, --verbose", "verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.verbose) {
      flags += " --verbose"
    }
    const cmd = `eggs status ${flags}`
    console.log(cmd)
  })
  /**
   * syncfrom
   */
  .command("syncfrom")
  .description("Restore users and user data from a LUKS volumes")
  .option("-f, --file=<value>", "file LUKS volume encrypted")
  .option("-r, --rootdir=<value>", "rootdir of the installed system, when used from live")
  .option("--delete=<value>", "rsync --delete delete extraneous files from dest dirs")
  .option("-v, --verbose", "verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.file) {
      flags += ' --file=' + p.file
    }
    if (p.rootdir) {
      flags += ' --rootdir=' + p.rootdir
    }
    if (p.delete) {
      flags += ' --delete=' + p.delete
    }
    if (p.verbose) {
      flags += ' --verbose'
    }
    const cmd = `eggs syncfrom ${flags}`
    console.log(cmd)
  })

  /**
   * syncto
   */
  .command("syncto")
  .description("saves users and user data in a LUKS volume inside the iso")
  .option("-v, --verbose", "verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.verbose) {
      flags += ' --verbose'
    }
    const cmd = `eggs syncto ${flags}`
    console.log(cmd)
  })
  /**
   * update
   */
  .command("update")
  .description("update the Penguins' eggs tool")
  .option("-f, --file=<value>", "file LUKS volume encrypted")
  .option("--delete", "delete extraneous files from dest dirs"
  )
  .option("-v, --verbose", "verbose")
  .action((...args) => {
    const p = args[0]
    let flags = ''
    if (p.delete) {
      flags += ' --delete'
    }
    if (p.file) {
      flags += ' --file=' + p.file
    }
    if (p.verbose) {
      flags += ' --verbose='
    }
    const cmd = `eggs update ${flags}`
    console.log(cmd)
  })
  .parse();
