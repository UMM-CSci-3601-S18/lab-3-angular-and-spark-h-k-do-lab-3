import {browser, by, element, Key} from 'protractor';

export class TodoPage {
  navigateTo() {
    return browser.get('/todos');
  }

  //http://www.assertselenium.com/protractor/highlight-elements-during-your-protractor-test-run/
  highlightElement(byObject) {
    function setStyle(element, style) {
      const previous = element.getAttribute('style');
      element.setAttribute('style', style);
      setTimeout(() => {
        element.setAttribute('style', previous);
      }, 200);
      return "highlighted";
    }

    return browser.executeScript(setStyle, element(byObject).getWebElement(), 'color: red; background-color: yellow;');
  }

  getTodoTitle() {
    let title = element(by.id('todo-list-title')).getText();
    this.highlightElement(by.id('todo-list-title'));

    return title;
  }

  typeAnOwner(owner: string) {
    let input = element(by.id('todoOwner'));
    input.click();
    input.sendKeys(owner);
  }

  typeACategory(category: string) {
    let input = element(by.id('todoCategory'));
    input.click();
    input.sendKeys(category);
  }

  typeABody(body: string) {
    let input = element(by.id('todoBody'));
    input.click();
    input.sendKeys(body);
  }

  typeAStatus(status: string) {
    let input = element(by.id('todoStatus'));
    input.click();
    input.sendKeys(status);
  }

  typeAnID(id: string) {
    let input = element(by.id('1'));
    let input2 = element(by.id('todoID'));

    input2.click();
    input2.sendKeys(id);

    input.click();
  }

  backspace(){
    browser.actions().sendKeys(Key.BACK_SPACE).perform();
  }

  getUniqueTodo(todo_id:string) {
    let todo = element(by.id(todo_id)).getText();
    this.highlightElement(by.id(todo_id));

    return todo;
  }
}
