db = db.getSiblingDB('graylog');

res = db.inputs.save({ "_id" : ObjectId("584af1d63289cb0d0f3895a7"), "creator_user_id" : "admin", "configuration" : { "recv_buffer_size" : 1048576, "tcp_keepalive" : false, "use_null_delimiter" : true, "tls_client_auth_cert_file" : "", "bind_address" : "0.0.0.0", "tls_cert_file" : "", "decompress_size_limit" : 8388608, "port" : 12201, "tls_key_file" : "", "tls_enable" : false, "tls_key_password" : "", "max_message_size" : 2097152, "tls_client_auth" : "disabled", "override_source" : null }, "name" : "GELF TCP", "created_at" : ISODate("2016-12-09T18:03:02.249Z"), "global" : true, "type" : "org.graylog2.inputs.gelf.tcp.GELFTCPInput", "title" : "Graylog TCP input", "content_pack" : null, "static_fields" : [ { "value" : "true", "key" : "from_tcp" } ] })

if (0 == res['nMatched'] && 1 == res['nUpserted']) {
    print("Added input config to graylog mongodb.");
} else {
    print("Unable to add input config to graylog mongodb. Probably because it already exists.\nThe error message follows:");
    print(res);
}