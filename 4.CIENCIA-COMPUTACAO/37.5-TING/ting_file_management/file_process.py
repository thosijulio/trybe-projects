import sys
from ting_file_management.file_management import txt_importer


def process(path_file, instance):
    file = txt_importer(path_file)
    new_content = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(file),
        "linhas_do_arquivo": file,
    }

    if instance.data:
        content_already_exist = False
        for content in instance.data:
            if content["nome_do_arquivo"] == path_file:
                content_already_exist = True
        if not content_already_exist:
            instance.enqueue(new_content)
            print(new_content, file=sys.stdout)
    else:
        instance.enqueue(new_content)
        print(new_content, file=sys.stdout)


def remove(instance):
    if not len(instance):
        print("Não há elementos", file=sys.stdout)
    else:
        path_file = instance.peek()["nome_do_arquivo"]
        print(f"Arquivo {path_file} removido com sucesso", file=sys.stdout)


def file_metadata(instance, position):
    try:
        file = instance.search(position)
        print(file, file=sys.stdout)
    except IndexError:
        print("Posição inválida", file=sys.stderr)
