import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  shouldReloadRecord() {
    return false;
  },

  shouldBackgroundReloadRecord(store, snapshot) {
    console.log("in shouldBackgroundReloadRecord");

    const hour = 3600000;
    const loadedAt = snapshot.record.get('loadedAt');
    return Date.now() - loadedAt > hour;
  }
});
