import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      // replace: true,
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('book', params);
  },

  actions: {
    openCheckoutModal(book) {
      this.controllerFor('application').set('showingModal', true);
      Ember.$('body').addClass('modal-open');

      return this.render('modal', {
        outlet: 'modal',
        into: 'application',
        model: book.reload(),
        controller: 'application'
      });
    },

    closeCheckoutModal() {
      this.controllerFor('application').set('showingModal', false);
      Ember.$('body').removeClass('modal-open');

      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },

    showAll() {
      const total = this.controllerFor('books').get('total');
      this.transitionTo({ queryParams: { limit: total } });
    }
  }
});
