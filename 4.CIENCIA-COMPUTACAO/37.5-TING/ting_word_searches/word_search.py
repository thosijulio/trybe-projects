def exists_word(word, instance):
    content = instance.data
    result = []
    for file in content:
        word_exist = {
            "palavra": word,
            "arquivo": file["nome_do_arquivo"],
            "ocorrencias": []
        }

        for line in file["linhas_do_arquivo"]:
            if word.lower() in line.lower():
                word_exist["ocorrencias"].append({
                    "linha": file["linhas_do_arquivo"].index(line) + 1,
                })

        if word_exist["ocorrencias"]:
            result.append(word_exist)
    return result


def search_by_word(word, instance):
    content = instance.data
    result = []
    for file in content:
        word_exist = {
            "palavra": word,
            "arquivo": file["nome_do_arquivo"],
            "ocorrencias": []
        }

        for line in file["linhas_do_arquivo"]:
            if word.lower() in line.lower():
                word_exist["ocorrencias"].append({
                    "linha": file["linhas_do_arquivo"].index(line) + 1,
                    "conteudo": line,
                })

        if word_exist["ocorrencias"]:
            result.append(word_exist)
    return result
