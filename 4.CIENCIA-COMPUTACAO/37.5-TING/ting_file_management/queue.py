class Queue:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def enqueue(self, value):
        self.data.append(value)

    def dequeue(self):
        return self.data.pop(0)

    def peek(self):
        return self.data[-1]

    def search(self, index):
        if 0 > index or index > len(self.data):
            raise IndexError('index not found')

        return self.data[index]
