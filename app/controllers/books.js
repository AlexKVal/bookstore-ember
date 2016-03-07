import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['limit'],
  limit: 5,

  total: Ember.computed('model.meta', function() {
    return this.get('model.meta').total;
  }),

  isShowAllVisible: Ember.computed('total', 'model', function() {
    return this.get('total') > this.get('model.length');
  })
});
