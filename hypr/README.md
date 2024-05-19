# Hypr configuration
Configuration for:
- The [Hyprland](https://github.com/hyprwm/Hyprland) Wayland compositor.
- The [Hyprparper](https://github.com/hyprwm/hyprpaper) Wayland wallpaper utility for Hyprland.

---

## Hyprland

### Structure
The configuration is split into various modules under the `Hyprland` directory; Each are sourced inside the `hyprland.conf` file. They mostly follow Hyprland's own sections. No actual configuration is done in `hyprland.conf`.

### Screen shaders
I have optional and disabled by default CRT-like *(ish)* shaders, modified from [these](https://github.com/Euro20179/.files/blob/master/.config/hypr/shaders/crt.frag) to not round the screen and to have more/thinner horizontal lines. They can have a good effect on some retro/emulated games and some with more minimalist appearance. Most things do not look great with these shaders, however, so they are not recommended to be used on the daily.

### Documentation
Help is available at:
- The `hyprland` man page.
- Hyprland's [wiki](https://wiki.hyprland.org).

---

## Hyprpaper

### Management
Hyprpaper is automatically managed by my [simple hyprpaper script](https://github.com/Atemo-C/Scripts/blob/main/Desktop%20scripts/Hyprpaper.sh).

### Documentation
Help is available at [Hyprpaper's GitHub page](https://github.com/hyprwm/hyprpaper?tab=readme-ov-file#usage).
