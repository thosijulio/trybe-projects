const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { expect } = require('chai');
const sinon = require('sinon');

const model = require('../../models/');

describe('Testes das funções de produto - Model', () => {
  let DBServer = new MongoMemoryServer();
  let connectionMock;

  before(async () => {
    const urlMock = await DBServer.getUri();
    connectionMock = await MongoClient.connect(urlMock, { useNewUrlParser: true, useUnifiedTopology: true });
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await DBServer.stop();
    sinon.restore();
  })

  describe('Testes da função create', () => {
    describe('Quando a função é chamada passando um produto', () => {
      const product = { 'name': 'product', 'quantity': 3 };

      it('Cria o produto no banco e a função retorna o resultado da operação', async () => {
        expect(await model.product.create(product)).to.be.an('array');
      });
    });
  });

  describe('Testes da função find', async () => {
    const product = { 'name': 'producto', 'quantity': 8 };

    describe('Quando a função é chamada sem parametro', () => {
      it('Retorna um array com todos os produtos cadastrados no banco', async () => {
        expect(await model.product.find()).to.be.an('array');
      });
    });
    describe('Quando a função é chamada com um parametro id válido', () => {
      it('Procura no banco se existe um item com o id igual ao passado e retorna o resultado', async () => {
        const [result] = await model.product.create(product);
        expect(await model.product.find(result._id)).to.have.keys('name', 'quantity', '_id');
      });
    });
  });

  describe('Testes da função findByName', () => {
    const product = { 'name': 'product', 'quantity': 7 };
    describe('Quando a função é chamada com um parametro nome', () => {
      it('Procura no banco se existe um item com o nome igual ao pasado e retorna o resultado', async () => {
        await model.product.create(product);
        expect(await model.product.findByName('product')).to.have.keys('_id', 'name', 'quantity');
      });
    });
  });

  describe('Testes da função delete', () => {
    describe('Quando a função é chamada com um id válido de parametro', () => {
      const product = { 'name': 'produto', quantity: 4 };

      it('Procura no banco se existe um item com o id igual ao passado e, se existe, exclui e retorna o produto excluido', async () => {
        const [result] = await model.product.create(product);
        expect((await model.product.remove(result._id)).value).to.have.keys('_id', 'name', 'quantity');
      });
    });
  });

  describe('Testes da função update', () => {
    const product = { 'name': 'producto', 'quantity': 5 };
    const newProduct = { 'name': 'produto', 'quantity': 2 };
    describe('Quando a função é chamada com os parametros id e produto válidos', () => {
      it('Procura no banco se existe um item com o id passado e, se existe, atuliza suas informações', async () => {
        const [result] = await model.product.create(product);
        expect((await model.product.update(result._id, newProduct))).to.have.keys('_id', 'name', 'quantity');
      });
    });
  });
});

describe('Testes das funções de venda - Model', () => {
  let DBServer = new MongoMemoryServer();
  let connectionMock;

  describe('Testes da função create', () => {
    
    before(async () => {
      const urlMock = await DBServer.getUri();
      connectionMock = await MongoClient.connect(urlMock, { useNewUrlParser: true, useUnifiedTopology: true });
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(async () => {
      await DBServer.stop();
      sinon.restore();
    });

    const sales = [{ 'productId': 'dasdiuh4238', 'quantity': 3 }];
    describe('Quando a função é chamada com um parametro sale válido:', () => {
      it('Cria a venda no banco e retorna ela', async () => {
        expect(await model.sale.create(sales)).to.have.keys('_id', 'itensSold');
      });
    });
  });

  describe('Testes da função find', () => {
    const sales = [{ 'productId': 'dasdh324823479sdhasdh', 'quantity': 3 }];

    before(async () => {
      const urlMock = await DBServer.getUri();
      connectionMock = await MongoClient.connect(urlMock, { useNewUrlParser: true, useUnifiedTopology: true });
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(async () => {
      await DBServer.stop();
      sinon.restore();
    });

    describe('Quando a função é chamada sem parametro', () => {
      it('Retorna um array com todas vendas no banco', async () => {
        await model.sale.create(sales);
        const allSales = await model.sale.find();
        expect(allSales).to.be.an('array').with.length(1);
        expect(allSales[0]).to.have.keys('_id', 'itensSold');
      });
    });

    describe('Quando a função é chamada com um id válido de parametro', () => {
      it('Pesquisa no banco se existe uma venda com o id informado e retorna o resultado', async () => {
        const { _id } = await model.sale.create(sales);
        expect(await model.sale.find(_id)).to.be.an('object').with.keys('_id', 'itensSold');
      });
    });
  });

  describe('Testes da função remove', () => {
    
    before(async () => {
      const urlMock = await DBServer.getUri();
      connectionMock = await MongoClient.connect(urlMock, { useNewUrlParser: true, useUnifiedTopology: true });
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(async () => {
      await DBServer.stop();
      sinon.restore();
    });

    describe('Quando a função é chamada com um parametro id válido', () => {
      it('Exclui no banco a venda com o id passado, e retorna ela', async () => {
        const sale = await model.sale.create([{ productId: 'ashiduahs343798', quantity: 2 }]);
        expect(await model.sale.find()).to.have.length(1);
        expect(await model.sale.remove(sale._id)).to.have.keys('_id', 'itensSold');
        expect(await model.sale.find()).to.have.length(0);
      });
    });
  });

  describe('Testes da função update', () => {

    before(async () => {
      const urlMock = await DBServer.getUri();
      connectionMock = await MongoClient.connect(urlMock, { useNewUrlParser: true, useUnifiedTopology: true });
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(async () => {
      await DBServer.stop();
      sinon.restore();
    });

    describe('Quando a função é chamada com um id e venda válidos', () => {
      it('Procura no banco uma venda com o id informado, atualiza no banco e retorna a nova venda', async () => {
        const oldSale = await model.sale.create([{ productId: 'duasidhicva2', quantity: 1 }]);
        const updatedItensSold = [{ productId: 'hdiasdhu2323', quantity: 1 }, { productId: '3421894dofjs', quantity: 3 }];
        const updatedSale = await model.sale.update(oldSale._id, updatedItensSold);
        expect(updatedSale).to.have.keys('_id', 'itensSold');
      });
    });
  });
});
