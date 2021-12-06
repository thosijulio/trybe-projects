const sinon = require('sinon');
const { expect } = require('chai');
const { ObjectId } = require('mongodb');

const service = require('../../services/');
const productModel = require('../../models/product/');
const saleModel = require('../../models/sale');

describe('Testes das funções de produto', () => {

  describe('Testes da função create', () => {

    describe('quando passado um produto que não existe no banco', () => {
      
      const product = { name: 'Produto1', quantity: 5 };
      const returnedProduct = [{ name: 'Produto1', quantity: 5, _id: '34g324g3kjhg' }];
  
      before(() => {
        sinon.stub(productModel, 'findByName').resolves(false);
        sinon.stub(productModel, 'create').resolves(returnedProduct);
      });
    
      after(() => {
        productModel.create.restore();
        productModel.findByName.restore();
      });
  
      it('o produto é criado com sucesso', async () => {
        expect(await service.product.create(product)).to.have.all.keys('_id', 'name', 'quantity');
      });
    });
  
    describe('quando passado um produto que existe no banco', () => {
    
      const product = { name: 'Produto2', quantity: 5 };
      const returnedProduct = { name: 'Produto1', quantity: 5, _id: '34g324g3kjhg' };
  
      before(() => {
        sinon.stub(productModel, 'findByName').resolves(returnedProduct);
      });
    
      after(() => {
        productModel.findByName.restore();
      });
  
      it('o produto não é criado, e a função retorna null', async () => {
        expect(await service.product.create(product)).to.be.equal(null);
      });
    });
  });

  describe('Testes da função find', () => {
    const id = 'sado34dsf78346f';
    const returnedProduct = { '_id': 'sado34dsf78346f', 'name': 'produto1', 'quantity': 6 };
    const arrProducts = [
      {
        '_id': 'sdfuh32490ev89',
        'name': 'produto1',
        'quantity': 3,
      },
      {
        '_id': 'sdfuh3249d0v89',
        'name': 'produto2',
        'quantity': 5,
      },
    ];
  
    describe('Quando é chamada sem um id valido como paramatro:', () => {
      
      before(() => {
        sinon.stub(ObjectId, 'isValid').returns(false);
        sinon.stub(productModel, 'find').resolves(arrProducts);
      });
      
      after(() => {
        sinon.restore();
      });
  
      it('Retorna todos os produtos do banco em um array quando chamada sem um parametro', async () => {
        expect(await service.product.find()).to.be.an('array');
      });
      it('Retorna null quando chamada com parametro id inválido', async () => {
        expect(await service.product.find(id)).to.be.equal(null);
      });
    });
  
    describe('Quando é chamada com um id válido como parametro', () => {
  
      before(() => {
        sinon.stub(ObjectId, 'isValid').returns(true);
        sinon.stub(productModel, 'find').resolves(returnedProduct);
      });
  
      after(() => {
        sinon.restore();
      });
  
      it('Busca no banco um produto com o id igual ao passado como parametro e retorna a resposta', async () => {
        expect(await service.product.find(id)).to.have.keys('_id', 'name', 'quantity');
      });
    });
  });

  describe('Testes da função remove', () => {
    const id = 'sdiahduih13238998uds';
    const removedProduct = { '_id': 'sdiahduih13238998uds', 'name': 'produto1', 'quantity': 8 };
  
    before(() => {
      sinon.stub(productModel, 'remove').resolves({ value: removedProduct });
    });
  
    after(() => {
      sinon.restore();
    });
    it('Procura no banco um produto com o mesmo id passado como parametro e retorna o resultado', async () => {
      expect(await service.product.remove(id)).to.have.keys('_id', 'name', 'quantity');
    })
  });

  describe('Testes da função update', () => {
    describe('Quando a função é chamada passando um id válido:', () => {
      const id = 'asdhauh32432ih';
      const returnedValue = { '_id': 'asdhauh32432ih', 'name': 'produto1', 'quantity': 4 };

      before(() => {
        sinon.stub(productModel, 'update').resolves(returnedValue);
      });

      after(() => {
        sinon.restore();
      });

      it('Retorna o produto atualizado', async () => {
        expect(await service.product.update(id)).to.have.keys('_id', 'name', 'quantity');
      });
    });
  });
});

describe('Testes das funções de vendas', () => {

  describe('Testes da função create', () => {
    describe('Quando passado uma venda com uma quantidade de produtos maior do que a existente', () => {
      const sales = [{ 'productId': 'dsah2u3h123d', 'quantity': 3 }];
      const productDb = { '_id': 'dsah2u3h123d', 'quantity': 1 };

      before(() => {
        sinon.stub(productModel, 'find').resolves(productDb);
      });

      after(() => {
        sinon.restore();
      });

      it('Não registra a venda no banco e retorna null', async () => {
        expect(await service.sale.create(sales)).to.be.equal(null);
      });
    });

    describe('Quando passado uma venda com uma quantidade de produtos menor ou igual a existente', () => {
      const sales = [{ 'productId': 'dsah2u3h123d', 'quantity': 3 }];
      const productDb = { '_id': 'dsah2u3h123d', 'quantity': 5 };
      const returnedSale = { '_id': 'dhsaiuh213490', 'itensSold': [{ 'productId': 'dsah2u3h123d', 'quantity': 3 }] };
      const updatedProduct = { '_id': 'dsah2u3h123d', 'quantity': 2 };

      before(() => {
        sinon.stub(productModel, 'find').resolves(productDb);
        sinon.stub(productModel, 'update').resolves(updatedProduct);
        sinon.stub(saleModel, 'create').resolves(returnedSale);
      });

      after(() => {
        sinon.restore();
      });

      it('Registra a venda no banco e retorna com o objeto criado', async () => {
        expect(await service.sale.create(sales)).to.have.keys('_id', 'itensSold');
      });
    });
  });

  describe('Testes da função find', () => {
    describe('Quando a função é chamada sem passagem de parametro', () => {
      const returnedSales = [{'_id': 'sadahsuih34242', 'itensSold': [{ 'productId': 'fsdfhuh3490f', 'quantity': 2 }] }];

      before(() => {
        sinon.stub(saleModel, 'find').resolves(returnedSales);
      });

      after(() => {
        sinon.restore();
      });

      it('Retorna um array com todas as vendas existentes no banco', async () => {
        expect(await service.sale.find()).to.be.an('array');
      });
    });
    describe('Quando a função é chamada com um id valido como parametro', () => {
      const id = 'sadahsuih34242';
      const returnedSale = {'_id': 'sadahsuih34242', 'itensSold': [{ 'productId': 'fsdfhuh3490f', 'quantity': 2 }] };

      before(() => {
        sinon.stub(saleModel, 'find').resolves(returnedSale);
      });

      after(() => {
        sinon.restore();
      });

      it('Procura no banco uma venda com o id passado e retorna o resultado', async () => {
        expect(await service.sale.find(id)).to.have.all.keys('_id', 'itensSold');
      });
    });
  });

  describe('Testes da função update', () => {
    describe('Quando a função é chamada passando um id valido e a venda atualizada como parametros', () => {
      const id = 'dhasduih4234';
      const update = [{ 'productId': 'dshfsuihu432', 'quantity': 3 }];
      const updatedSale = { '_id': 'dhasduih4234', 'itensSold': update };
      
      before(() => {
        sinon.stub(saleModel, 'update').resolves(updatedSale);
      });

      after(() => {
        sinon.restore();
      });

      it('Atualiza a venda no banco e retorna a atualizacao', async () => {
        expect(await service.sale.update(id)).to.have.keys('_id', 'itensSold');
      });
    });
  });

  describe('Testes da função remove', () => {
    describe('Quando a função é chamada informando um id valido como parametro', () => {
      const id = 'adshiuh4234';
      const product = { '_id': 'adshiuh4234', 'quantity': 1 };
      const removedSale = { '_id': id, 'itensSold': [{ 'productId': 'djsadu4534f', 'quantity': 2 }] };
      const updatedProduct = { '_id': 'adshiuh4234', 'quantity': 3 };
      
      before(() => {
        sinon.stub(saleModel, 'remove').resolves(removedSale);
        sinon.stub(productModel, 'find').resolves(product);
        sinon.stub(productModel, 'update').resolves(updatedProduct);
      });

      after(() => {
        sinon.restore();
      });
      it('remove a venda do banco, atualiza a quantidade dos produtos e retorna a venda removida', async () => {
        expect(await service.sale.remove(id)).to.have.keys('_id', 'itensSold');
      });
    });
  });
})
