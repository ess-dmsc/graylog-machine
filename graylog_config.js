db = db.getSiblingDB('graylog');

res = db.inputs.save({ "_id" : ObjectId("584af1d63289cb0d0f3895a7"), "creator_user_id" : "admin", "configuration" : { "recv_buffer_size" : 1048576, "tcp_keepalive" : false, "use_null_delimiter" : true, "tls_client_auth_cert_file" : "", "bind_address" : "0.0.0.0", "tls_cert_file" : "", "decompress_size_limit" : 8388608, "port" : 12201, "tls_key_file" : "", "tls_enable" : false, "tls_key_password" : "", "max_message_size" : 2097152, "tls_client_auth" : "disabled", "override_source" : null }, "name" : "GELF TCP", "created_at" : ISODate("2016-12-09T18:03:02.249Z"), "global" : true, "type" : "org.graylog2.inputs.gelf.tcp.GELFTCPInput", "title" : "Graylog TCP input", "content_pack" : null, "static_fields" : [ { "value" : "true", "key" : "from_tcp" } ] })

if (0 == res['nMatched'] && 1 == res['nUpserted']) {
    print("Added TCP input config to graylog mongodb.");
} else {
    print("Unable to add TCP input config to graylog mongodb. Probably because it already exists.\nThe error message follows:");
    print(res);
}

// res = db.inputs.save({ "_id" : ObjectId("5885cf873289cb03e3bcda24"), "creator_user_id" : "admin", "configuration" : { "override_source" : null, "recv_buffer_size" : 262144, "bind_address" : "0.0.0.0", "port" : 12201, "decompress_size_limit" : 8388608 }, "name" : "GELF UDP", "created_at" : ISODate("2017-01-23T09:40:23.252Z"), "global" : true, "type" : "org.graylog2.inputs.gelf.udp.GELFUDPInput", "title" : "Graylog UDP input", "content_pack" : null, "static_fields" : [ { "value" : "true", "key" : "from_udp" } ] })
//
// if (0 == res['nMatched'] && 1 == res['nUpserted']) {
//     print("Added UDP input config to graylog mongodb.");
// } else {
//     print("Unable to add UDP input config to graylog mongodb. Probably because it already exists.\nThe error message follows:");
//     print(res);
// }
//
// res = db.inputs.remove({ "title":"appliance-gelf-udp"})
//
// if (1 == res['nRemoved']) {
//     print("Removed old UDP input from graylog mongodb.");
// } else {
//     print("Unable to remove UDP input config from graylog mongodb. Probably because it was already removed.\nThe error message follows:");
//     print(res);
//     db.inputs.find().forEach(printjson);
// }
//
// res = db.inputs.remove({ "title":"appliance-syslog-udp"})
//
// if (1 == res['nRemoved']) {
//     print("Removed old Syslog input from graylog mongodb.");
// } else {
//     print("Unable to remove Syslog input config from graylog mongodb. Probably because it was already removed.\nThe error message follows:");
//     print(res);
//     db.inputs.find().forEach(printjson);
// }
