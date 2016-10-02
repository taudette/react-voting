// provides methods for creating alt actions and stores -- connects stores and actions
import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );
  }

  getTopCharacters() {
    $.ajax({ url: '/api/characters/top' })
      .done((data) => {
        this.actions.getTopCharactersSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTopCharactersFail(jqXhr);
      });
  }
}

export default alt.createActions(FooterActions);
