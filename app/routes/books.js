import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {
    openCheckoutModal(book) {
      this.controllerFor('application').set('showingModal', true);
      Ember.$('body').addClass('modal-open');

      return this.render('modal', {
        outlet: 'modal',
        into: 'application',
        model: book.reload(), // this.store.findRecord('book', book.id, {reload: true}),
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
    }
  }
});
