(function () {

  'use strict';

  angular.module('inboxServices', ['ngResource']);

  require('./analytics-modules');
  require('./android-api');
  require('./app-info');
  require('./auth');
  require('./cache');
  require('./changes');
  require('./check-date');
  require('./clean-etag');
  require('./contact-form');
  require('./contact-schema');
  require('./count-messages');
  require('./db');
  require('./db-sync');
  require('./db-view');
  require('./debug');
  require('./delete-docs');
  require('./download-url');
  require('./edit-group');
  require('./enketo');
  require('./enketo-prepopulation-data');
  require('./enketo-translation');
  require('./facility');
  require('./facility-hierarchy');
  require('./file-reader');
  require('./json-forms');
  require('./format-data-record');
  require('./format-date');
  require('./generate-search-query');
  require('./generate-search-requests');
  require('./get-data-records');
  require('./import-contacts');
  require('./kanso-packages');
  require('./language');
  require('./location');
  require('./markdown');
  require('./live-list');
  require('./mark-read');
  require('./message-contacts');
  require('./message-state');
  require('./modal');
  require('./moment-locale-data');
  require('./outgoing-messages-configuration');
  require('./properties');
  require('./read-messages');
  require('./resource-icons');
  require('./rules-engine');
  require('./scheduled-forms');
  require('./search');
  require('./search-filters');
  require('./send-message');
  require('./session');
  require('./settings');
  require('./snackbar');
  require('./target-generator');
  require('./traffic-stats');
  require('./translate-from');
  require('./update-contact');
  require('./update-facility');
  require('./update-settings');
  require('./update-user');
  require('./user');
  require('./verified');
  require('./watch-design-doc');
  require('./web-worker');
  require('./xml-forms');
  require('./xml-forms-context-utils');
  require('./xslt');

}());
