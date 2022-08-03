import sys


def txt_importer(path_file):
    if not path_file.endswith(".txt"):
        return print("Formato inválido", file=sys.stderr)
    try:
        file = open(path_file, mode="r")
        content = file.read().split("\n")
        return content
    except OSError:
        print(f"Arquivo {path_file} não encontrado", file=sys.stderr)
