# Commands to run in interactive sessions can go here.
if status is-interactive
end

# Set a custom "greetings" message.
set fish_greeting

# Functin to make the famous !! work as our lord and saviour the Linux Fox intended.
function last_history_item; echo $history[1]; end
abbr -a !! --position anywhere --function last_history_item
