Pos.Collection.Payments.cacheTimestamp();
Pos.Collection.Payments.cacheDoc('sale',Pos.Collection.Sales,['_customer','total','voucher']);
Pos.Collection.Payments.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);
Pos.Collection.Payments.cacheDoc('staff',Pos.Collection.Staffs,['name']);