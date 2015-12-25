Meteor.methods({
    searchProduct: function (query, options) {
        options = options || {};
        // guard against client-side DOS: hard limit to 50
        if (options.limit) {
            options.limit = Math.min(50, Math.abs(options.limit));
        } else {
            options.limit = 50;
        }

        // TODO fix regexp to support multiple tokens
        var regex = new RegExp(query, 'i');
        return Pos.Collection.Products.find({
            $or: [{_id: {$regex: regex}}, {name: {$regex: regex}}, {barcode: {$regex: regex}}]
        }, options).fetch();
    },
    search: function (collectionName, query, options) {
        options = options || {};
        // guard against client-side DOS: hard limit to 50
        if (options.limit) {
            options.limit = Math.min(50, Math.abs(options.limit));
        } else {
            options.limit = 50;
        }
        // TODO fix regexp to support multiple tokens
        var regex = new RegExp(query, 'i');
        return Pos.Collection.Products.find({
            $or: [{_id: {$regex: regex}}, {name: {$regex: regex}}, {barcode: {$regex: regex}}]
        }, options).fetch();
    }
});