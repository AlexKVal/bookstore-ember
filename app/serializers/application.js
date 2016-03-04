import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  /**
   * because active_model_serializers@v0.10.0.rc4 version cannot
   * deserialize JSONAPI-format, yet.
   */
   serialize() {
     const result = this._super(...arguments);
     const attr = result.data.attributes || {};
     const relationships = result.data.relationships || {};

     return Object.keys(relationships).reduce((acc, elem) => {
       const data = relationships[elem].data;
       if (data) {
         acc[elem + '_id'] = data.id;

         const type = data.type;
         if (type) {
           acc[elem + '_type'] = type[0].toUpperCase() + type.slice(1, -1);
         }
       }

       return acc;
     }, attr);
   }
});
