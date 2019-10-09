install_oh_my_zsh() {
  echo "Setting up zsh..." 
}

install_homebrew() {
  echo "Setting up homebrew..." 
  # && /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" \
  # && brew install yarn \
  # && brew install tmux \
  # && brew install heroku/brew/heroku \
  # && brew install qt5  \
  # && pip3 install qutebrowser \
  # && brew install neovim \ 
  # echo "Successing to setting homebrew..." 
}

install_neovim() {
  echo "Setting up neovim..." \
  && rm -rf ~/.config/nvim \
  && git clone https://github.com/tranthaison1231/SETTING_NVIM_CONFIG ~/.config/nvim/ \
  && nvim -c 'PlugInstall' \
  echo "Successing to setting neovim..." 
}


if [[ -z $1 ]]; then
  echo "This will delete all your previous nvim, zsh settings. Proceed? (y/n)? "
  read answer
  if echo "$answer" | grep -iq "^y" ;then
    echo "Installing dependencies..." \
    && install_neovim \
    && echo "Finished installation."
  fi
else
  "install_$1" $1
fi