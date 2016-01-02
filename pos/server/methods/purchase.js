Meteor.methods({
    //Purchase
    insertPurchaseAndPurchaseDetail: function (purchase, purchaseDetail) {
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        var purchaseId = Pos.Collection.Purchases.insert(purchase);
        purchaseDetail._id = idGenerator.genWithPrefix(Pos.Collection.PurchaseDetails, purchaseId, 3);
        purchaseDetail.purchaseId = purchaseId;
        Pos.Collection.PurchaseDetails.insert(purchaseDetail);
    },
    insertPurchase: function (obj) {
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        return Pos.Collection.Purchases.insert(obj);
    },
    directInsertPurchase:function(obj){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Pos.Collection.Purchases.direct.insert(obj);
    },
    updatePurchase: function (id, set,unset) {
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        var updateObject = {};
        if (set != null) updateObject.$set = set;
        if (unset != null) updateObject.$unset = unset;
        Pos.Collection.Purchases.update(id, {$set: set});
    },
    directUpdatePurchase:function(id,set,unset){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        var updateObject = {};
        if (set != null) updateObject.$set = set;
        if (unset != null) updateObject.$unset = unset;
        Pos.Collection.Purchases.update(id,updateObject);
    },
    insertPurchaseDetails: function (obj) {
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Pos.Collection.PurchaseDetails.insert(obj);
    },
    directInsertPurchaseDetails:function(obj){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Pos.Collection.PurchaseDetails.direct.insert(obj);
    },
    updatePurchaseDetails: function (id, set) {
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Pos.Collection.PurchaseDetails.update(id, {$set: set});
    },
    directUpdatePurchaseDetails:function(id,set,unset){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        var updateObject = {};
        if (set != null) updateObject.$set = set;
        if (unset != null) updateObject.$unset = unset;
        Pos.Collection.PurchaseDetails.direct.update(id,updateObject);
    },
    cancelPurchase: function (purchaseId) {
      //  Pos.Collection.PurchaseDetails.remove({purchaseId: purchaseId});
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Pos.Collection.Purchases.remove(purchaseId);
    }
});