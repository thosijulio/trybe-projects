from functools import lru_cache
import csv


@lru_cache
def read(path):
    dicts_list = []
    """Reads a file from a given path and returns its contents
    Parameters
    ----------
    path : str
        Full path to file

    Returns
    -------
    list
        List of rows as dicts
    """
    with open(path, mode="r") as file:
        dicts = csv.DictReader(file)
        for dict in dicts:
            dicts_list.append(dict)
    return dicts_list
