import {TodoPage} from './todo-list.po';
import {browser, protractor} from 'protractor';

let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
browser.driver.controlFlow().execute = function () {
  let args = arguments;

  // queue 100ms wait between test
  //This delay is only put here so that you can watch the browser do its' thing.
  //If you're tired of it taking long you can remove this call
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('Todo list', () => {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  });

  it('should get and highlight Todo Name attribute ', () => {
    page.navigateTo();
    expect(page.getTodoTitle()).toEqual('Todos');
  });

  it('should type something in filter name box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeAnOwner("Fry");
    page.typeACategory("homework");
    page.typeABody('voluptate');
    page.typeAStatus("true");

    expect(page.getUniqueTodo("58895985694d5db4f804ab3b")).toEqual("58895985694d5db4f804ab3b");
  });

  it('should type something in search by id box and reset', ()=> {
    page.navigateTo();
    page.typeAnID('58895985a22c04e761776d54');

    expect(page.getUniqueTodo('58895985a22c04e761776d54')).toEqual('58895985a22c04e761776d54');
//    expect(page.getUniqueTodo('58895985c1849992336c219b')).toBeNull();

    page.resetIDSearch();
    expect(page.getUniqueTodo('58895985c1849992336c219b')).toEqual("58895985c1849992336c219b");
  });

});

