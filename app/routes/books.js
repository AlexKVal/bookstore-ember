import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {
    openCheckoutModal(book) {
      return this.render('components/checkout-modal', {
        outlet: 'modal',
        into: 'application',
        model: book,
        controller: 'application'
      });
    },

    closeCheckoutModal() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
