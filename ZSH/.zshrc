# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/shyn/.oh-my-zsh"

ZSH_THEME="robbyrussell"

plugins=(
  git
  bundler
  dotenv
  osx
  rake
  rbenv
  ruby
)

source $ZSH/oh-my-zsh.sh


alias youtube="open -a 'Google Chrome' http://www.youtube.com "
alias facebook="open -a 'Google Chrome' http://www.facebook.com "
alias trello="open -a 'Google Chrome' http://www.trello.com "
alias skype="open -a 'Google Chrome' https://web.skype.com/ "
alias google="open -a 'Google Chrome' https://www.google.com/ "
alias gitlab="open -a 'Google Chrome' https://gitlab.com/dashboard/projects "
alias github="open -a 'Google Chrome' https://github.com/tranthaison1231?tab=repositories "
alias photoshop="open -a 'Adobe Photoshop CC 2019' "
alias xd="open -a 'Adobe XD' "
alias git_son="ga . && gcmsg 'Edit' && ggpush"


export NVM_DIR="/Users/shyn/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
