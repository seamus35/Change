if (Meteor.isClient) {
  Session.setDefault ('Clickz', 0);
  Template.main.helpers ({
  Clickz: function() {
    return Session.get('Clickz');
  }
  });

  Template.main.events({
    'click button': function() {
      Session.set('Clickz', Session.get ('Clickz') + 1);
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}