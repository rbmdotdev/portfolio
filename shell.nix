{ pkgs ? import (fetchGit {
  url = https://github.com/NixOS/nixpkgs;
  ref = "nixpkgs-unstable";
}) {} }:
with pkgs;

mkShell {
  buildInputs = [
    pkgs.nodejs
    nodePackages.npm
    nodePackages.yarn
  ];
}
