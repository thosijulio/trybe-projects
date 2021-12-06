const sinon = require('sinon');
const { expect } = require('chai');
const express = require('express');

const productRouter = require('../../controllers/product/productRouter');
const createProduct = require('../../controllers/product/create');
const findProduct = require('../../controllers/product/find');
const findByIdProduct = require('../../controllers/product/findById');
const updateProduct = require('../../controllers/product/update');
const removeProduct = require('../../controllers/product/remove');

const createSale = require('../../controllers/sale/create');
const findSale = require('../../controllers/sale/find');
const findByIdSale = require('../../controllers/sale/findById');
const updateSale = require('../../controllers/sale/update');
const removeSale = require('../../controllers/sale/remove');

const service = require('../../services');

describe('Testes das funções de produto', () => {
  const request = {};
  const response = {};

  describe('Testes da função create', () => {

    describe('Quando chamada com um produto já existente', () => {
      const product = { 'name': 'produto1', 'quantity': 1 };
      const next = sinon.stub().returns();
      
      before(() => {
        sinon.stub(service.product, 'create').resolves(null);
        request.body = product;
      });

      after(() => {
        sinon.restore();
      });

      it('é chamado o next com o objeto de erro', async () => {
        await createProduct(request, response, next);
        expect(next.calledWith({ status: 422, code: 'invalid_data', message: 'Product already exists', })).to.be.equal(true);
      });
    });

    describe('Quando chamada com um produto novo e válido', () => {
      const product = { 'name': 'newProduct', 'quantity': 23 };

      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        request.body = product;
        sinon.stub(service.product, 'create').resolves({ ...product, _id: 'disdahsiu234387' });
      });

      after(() => {
        sinon.restore();
      });

      it('é chamado o response.status com o codigo 201', async () => {
        await createProduct(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('é chamado o response.json com o produto cadastrado no banco', async () => {
        await createProduct(request, response);
        expect(response.json.calledWith({ ...product, _id: 'disdahsiu234387' }));
      })
    });
  });

  describe('Testes da função find', () => {
    const productsDB = [{ _id: '507f1f77bcf86cd799439011', name: 'produto', quantity: 2 }];

    before(() => {
      response.json = sinon.stub().returns();      
      response.status = sinon.stub().returns(response);
      sinon.stub(service.product, 'find').resolves(productsDB);
    });

    after(() => {
      sinon.restore();
    });

    describe('Quando a função é chamada', () => {

      it('É chamado o response.status com o código 200', async () => {
        await findProduct(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
      it('É chamado response.json com o valor encontrado no banco', async () => {
        await findProduct(request, response);
        expect(response.json.calledWith(productsDB));
      });
    });
  });

  describe('Testes da função findById', () => {
    
    describe('Quando o id informado for válido', () => {
      request.params = { id: '507f1f77bcf86cd799439011' };
      const productDB = { _id: request.params.id, name: 'produto1', quantity: 3 };

      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(service.product, 'find').resolves(productDB);
      });

      after(() => {
        sinon.restore();
      });

      it('É chamado o response.status com o código 200', async () => {
        await findByIdProduct(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });

    describe('Quando o id informado não for válido', () => {
      const next = sinon.stub().returns();

      before(() => {
        sinon.stub(service.product, 'find').resolves(false);
      });

      after(() => {
        sinon.restore();
      });

      it('É chamado o next com o objeto de erro correto', async () => {
        await findByIdProduct(request, response, next);
        expect(next.calledWith({ status: 422, code: 'invalid_data', message: 'Wrong id format' })).to.be.equal(true);
      });
    });
  });

  describe('Testes da função update', () => {
    const product = { name: 'produto1', quantity: 2 }

    request.params = product;
    request.body = { id: '507f1f77bcf86cd799439011' };

    before(() => {
      sinon.stub(service.product, 'update').resolves(product);
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    after(() => {
      sinon.restore();
    });

    describe('Quando a função for chamada passando id e produtoAtualizado válidos:', () => {
      it('Procura no banco e atualiza o produto com o id igual ao passado e retorna o resultado', async () => {
        await updateProduct(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });
  });

  describe('Testes da função remove', () => {
    request.params = { id: '507f1f77bcf86cd799439011' };

    describe('Quando a função é chamada passando um id de produto que existe no banco:', () => {
      const removedProduct = { _id: '507f1f77bcf86cd799439011', name: 'produto1', quantity: 9 };

      before(() => {
        sinon.stub(service.product, 'remove').returns(removedProduct);
        
      });
  
      after(() => {
        sinon.restore();
      });

      it('Exclui o produto do banco e retorna ele dentro da response', async () => {
        await removeProduct(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });

    describe('Quando a função é chamada passando um id de produto que não existe no banco', () => {
      const errObj = { status: 422, code: 'invalid_data', message: 'Wrong id format' };
      const next = sinon.stub().returns();
      
      before(() => {
        sinon.stub(service.product, 'remove').returns(null);
        
      });
  
      after(() => {
        sinon.restore();
      });

      it('Procura o produto no banco, não encontra e retorna no next um objeto de erro', async () => {
        await removeProduct(request, response, next);
        expect(next.calledWith(errObj));
      })
    })
  });
});

describe('Testes das funções de venda', () => {
  const request = {};
  const response = {};

  describe('Testes da função create', () => {
    const sales = [{ productId: '507f191e810c19729de860ea0', quantity: 4 }];
    
    request.body = { sales };

    describe('Quando o middleware é chamado passando uma venda com uma quantidade disponivel no banco', () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      before(() => {
        sinon.stub(service.sale, 'create').resolves({ itensSold: sales, _id: '507f191e810c19729de860ea' });
      });

      after(() => {
        sinon.restore();
      });

      it('insere a venda no banco e retorna o resultado', async () => {
        await createSale(request, response);
        expect(response.status.calledWith(200));
        expect(response.json.calledWith({ itensSold: sales, _id: '507f191e810c19729de860ea' })).to.be.equal(true);
      });
    });

    describe('Quando o middleware é chamado passando uma venda com quantidade indisponivel no banco', () => {
      const errObj = { status: 404, code: 'stock_problem', message: 'Such amount is not permitted to sell' };
      const next = sinon.stub().returns();

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();   

      before(() => {
        sinon.stub(service.sale, 'create').resolves(null);
      });

      after(() => {
        sinon.restore();
      });

      it('o middleware chama o parametro next com um objeto de erro', async () => {
        await createSale(request, response, next);
        expect(next.calledWith(errObj))
      });
    });
  });

  describe('Testes da função find', () => {
    const sales = [{ _id: '507f191e810c19729de860ea', itensSold: [{ productId: '507f1f77bcf86cd799439011', quantity: 3 }] }];
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    before(() => {
      sinon.stub(service.sale, 'find').resolves(sales);
    });

    after(() => {
      sinon.restore();
    });

    describe('O middleware procura por todas as vendas existentes no bd e retorna o resultado', () => {
      it('É chamado o response.status com o código 200', async () => {
        await findSale(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      })
    })
  });

  describe('Testes da função findById', () => {
    request.params = { id: '507f1f77bcf86cd799439011' };

    describe('Quando existe uma venda com o id igual ao passado no request', () => {
      const sale = { _id: request.params.id, itensSold: [{ productId: '507f191e810c19729de860ea', quantity: 3 }] };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      before(() => {
        sinon.stub(service.sale, 'find').resolves(sale);
      });

      after(() => {
        sinon.restore();
      });

      it('É chamado response.status com o código 200', async () => {
        await findByIdSale(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      })
    });

    describe('Quando não existe uma venda com o id igual ao passado no request', () => {
      const errObj = { status: 404, code: 'not_found', message: 'Sale not found' };
      const next = sinon.stub().returns();

      before(() => {
        sinon.stub(service.sale, 'find').resolves(null);
      });

      after(() => {
        sinon.restore();
      });

      it('É chamado next com o objeto de erro correto', async () => {
        await findByIdSale(request, response, next);
        expect(next.calledWith(errObj)).to.be.equal(true);
      });
    });
  });

  describe('Testes da função update', () => {
    const updatedSale = [{ productId: '507f1f77bcf86cd799439011', quantity: 4 }];

    request.params = { id: '507f191e810c19729de860ea' };
    request.body = { ...updatedSale };

    before(() => {
      sinon.stub(service.sale, 'update').returns(updatedSale);
    });

    after(() => {
      sinon.restore();
    });

    describe('Quando o middleware é chamado passando na request o id e sale válidos', () => {
      it('É chamado response.status com o código 200', async () => {
        await updateSale(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    })
  });

  describe('Testes da função remove', () => {
    request.params = { id: '507f1f77bcf86cd799439011' };

    describe('Quando existe uma venda com o id passado no request', () => {
      const removedSale = { _id: '507f1f77bcf86cd799439011', itensSold: [{ productId: '507f191e810c19729de860ea', quantity: 3 }] };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      before(() => {
        sinon.stub(service.sale, 'remove').resolves(removedSale);
      });
      
      after(() => {
        sinon.restore();
      });

      it('É chamado response.json com a venda excluida do banco', async () => {
        await removeSale(request, response);
        expect(response.json.calledWith(removedSale)).to.be.equal(true);
      });
    });

    describe('Quando não existe uma venda com o id passado no request', () => {
      const errObj = { status: 422, code: 'invalid_data', message: 'Wrong sale ID format' };
      const next = sinon.stub().returns();

      before(() => {
        sinon.stub(service.sale, 'remove').resolves(null);
      });
      
      after(() => {
        sinon.restore();
      });

      it('É chamado o parametro next com o objeto de erro', async () => {
        await removeSale(request, response, next);
        expect(next.calledWith(errObj)).to.be.equal(true);
      });
    });

  });
});