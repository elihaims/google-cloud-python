Search.setIndex({envversion:46,filenames:["bigquery-client","bigquery-dataset","bigquery-job","bigquery-table","bigquery-usage","datastore-batches","datastore-client","datastore-entities","datastore-keys","datastore-queries","datastore-transactions","gcloud-api","gcloud-auth","index","pubsub-client","pubsub-subscription","pubsub-topic","pubsub-usage","resource-manager-api","resource-manager-client","resource-manager-project","storage-acl","storage-blobs","storage-buckets","storage-client"],objects:{"gcloud.bigquery":{client:[0,0,0,"-"],connection:[0,0,0,"-"],dataset:[1,0,0,"-"],job:[2,0,0,"-"],table:[3,0,0,"-"]},"gcloud.bigquery.client":{Client:[0,2,1,""]},"gcloud.bigquery.client.Client":{copy_table:[0,3,1,""],dataset:[0,3,1,""],extract_table_to_storage:[0,3,1,""],list_datasets:[0,3,1,""],load_table_from_storage:[0,3,1,""],run_async_query:[0,3,1,""]},"gcloud.bigquery.connection":{Connection:[0,2,1,""]},"gcloud.bigquery.connection.Connection":{API_BASE_URL:[0,1,1,""],API_URL_TEMPLATE:[0,1,1,""],API_VERSION:[0,1,1,""],SCOPE:[0,1,1,""]},"gcloud.bigquery.dataset":{AccessGrant:[1,2,1,""],Dataset:[1,2,1,""]},"gcloud.bigquery.dataset.Dataset":{"delete":[1,3,1,""],access_grants:[1,1,1,""],create:[1,3,1,""],created:[1,1,1,""],dataset_id:[1,1,1,""],default_table_expiration_ms:[1,1,1,""],description:[1,1,1,""],etag:[1,1,1,""],exists:[1,3,1,""],friendly_name:[1,1,1,""],from_api_repr:[1,6,1,""],list_tables:[1,3,1,""],location:[1,1,1,""],modified:[1,1,1,""],patch:[1,3,1,""],path:[1,1,1,""],project:[1,1,1,""],reload:[1,3,1,""],self_link:[1,1,1,""],table:[1,3,1,""],update:[1,3,1,""]},"gcloud.bigquery.job":{Compression:[2,2,1,""],CopyJob:[2,2,1,""],CreateDisposition:[2,2,1,""],DestinationFormat:[2,2,1,""],Encoding:[2,2,1,""],ExtractTableToStorageJob:[2,2,1,""],LoadTableFromStorageJob:[2,2,1,""],QueryPriority:[2,2,1,""],RunAsyncQueryJob:[2,2,1,""],SourceFormat:[2,2,1,""],WriteDisposition:[2,2,1,""]},"gcloud.bigquery.job.Compression":{ALLOWED:[2,1,1,""],GZIP:[2,1,1,""],NONE:[2,1,1,""]},"gcloud.bigquery.job.CopyJob":{create_disposition:[2,1,1,""],write_disposition:[2,1,1,""]},"gcloud.bigquery.job.CreateDisposition":{ALLOWED:[2,1,1,""],CREATE_IF_NEEDED:[2,1,1,""],CREATE_NEVER:[2,1,1,""]},"gcloud.bigquery.job.DestinationFormat":{ALLOWED:[2,1,1,""],AVRO:[2,1,1,""],CSV:[2,1,1,""],NEWLINE_DELIMITED_JSON:[2,1,1,""]},"gcloud.bigquery.job.Encoding":{ALLOWED:[2,1,1,""],ISO_8559_1:[2,1,1,""],UTF_8:[2,1,1,""]},"gcloud.bigquery.job.ExtractTableToStorageJob":{compression:[2,1,1,""],destination_format:[2,1,1,""],field_delimiter:[2,1,1,""],print_header:[2,1,1,""]},"gcloud.bigquery.job.LoadTableFromStorageJob":{allow_jagged_rows:[2,1,1,""],allow_quoted_newlines:[2,1,1,""],create_disposition:[2,1,1,""],encoding:[2,1,1,""],field_delimiter:[2,1,1,""],ignore_unknown_values:[2,1,1,""],input_file_bytes:[2,1,1,""],input_files:[2,1,1,""],max_bad_records:[2,1,1,""],output_bytes:[2,1,1,""],output_rows:[2,1,1,""],quote_character:[2,1,1,""],schema:[2,1,1,""],skip_leading_rows:[2,1,1,""],source_format:[2,1,1,""],write_disposition:[2,1,1,""]},"gcloud.bigquery.job.QueryPriority":{ALLOWED:[2,1,1,""],BATCH:[2,1,1,""],INTERACTIVE:[2,1,1,""]},"gcloud.bigquery.job.RunAsyncQueryJob":{allow_large_results:[2,1,1,""],create_disposition:[2,1,1,""],default_dataset:[2,1,1,""],destination_table:[2,1,1,""],flatten_results:[2,1,1,""],priority:[2,1,1,""],use_query_cache:[2,1,1,""],write_disposition:[2,1,1,""]},"gcloud.bigquery.job.SourceFormat":{ALLOWED:[2,1,1,""],CSV:[2,1,1,""],DATASTORE_BACKUP:[2,1,1,""],NEWLINE_DELIMITED_JSON:[2,1,1,""]},"gcloud.bigquery.job.WriteDisposition":{ALLOWED:[2,1,1,""],WRITE_APPEND:[2,1,1,""],WRITE_EMPTY:[2,1,1,""],WRITE_TRUNCATE:[2,1,1,""]},"gcloud.bigquery.table":{SchemaField:[3,2,1,""],Table:[3,2,1,""]},"gcloud.bigquery.table.Table":{"delete":[3,3,1,""],create:[3,3,1,""],created:[3,1,1,""],dataset_name:[3,1,1,""],description:[3,1,1,""],etag:[3,1,1,""],exists:[3,3,1,""],expires:[3,1,1,""],fetch_data:[3,3,1,""],friendly_name:[3,1,1,""],from_api_repr:[3,6,1,""],insert_data:[3,3,1,""],location:[3,1,1,""],modified:[3,1,1,""],num_bytes:[3,1,1,""],num_rows:[3,1,1,""],patch:[3,3,1,""],path:[3,1,1,""],project:[3,1,1,""],reload:[3,3,1,""],schema:[3,1,1,""],self_link:[3,1,1,""],table_id:[3,1,1,""],table_type:[3,1,1,""],update:[3,3,1,""],view_query:[3,1,1,""]},"gcloud.client":{Client:[11,2,1,""],JSONClient:[11,2,1,""]},"gcloud.client.Client":{from_service_account_json:[11,6,1,""],from_service_account_p12:[11,6,1,""]},"gcloud.connection":{API_BASE_URL:[11,8,1,""],Connection:[11,2,1,""],JSONConnection:[11,2,1,""]},"gcloud.connection.Connection":{SCOPE:[11,1,1,""],USER_AGENT:[11,1,1,""],credentials:[11,1,1,""],http:[11,1,1,""]},"gcloud.connection.JSONConnection":{API_BASE_URL:[11,1,1,""],API_URL_TEMPLATE:[11,1,1,""],API_VERSION:[11,1,1,""],api_request:[11,3,1,""],build_api_url:[11,6,1,""]},"gcloud.credentials":{generate_signed_url:[11,5,1,""],get_credentials:[11,5,1,""],get_for_service_account_json:[11,5,1,""],get_for_service_account_p12:[11,5,1,""]},"gcloud.datastore":{batch:[5,0,0,"-"],client:[6,0,0,"-"],connection:[6,0,0,"-"],entity:[7,0,0,"-"],key:[8,0,0,"-"],query:[9,0,0,"-"],transaction:[10,0,0,"-"]},"gcloud.datastore.batch":{Batch:[5,2,1,""]},"gcloud.datastore.batch.Batch":{"delete":[5,3,1,""],add_auto_id_entity:[5,3,1,""],begin:[5,3,1,""],commit:[5,3,1,""],connection:[5,1,1,""],current:[5,3,1,""],dataset_id:[5,1,1,""],mutation:[5,1,1,""],namespace:[5,1,1,""],put:[5,3,1,""],rollback:[5,3,1,""]},"gcloud.datastore.client":{Client:[6,2,1,""]},"gcloud.datastore.client.Client":{"delete":[6,3,1,""],allocate_ids:[6,3,1,""],batch:[6,3,1,""],current_batch:[6,1,1,""],current_transaction:[6,1,1,""],delete_multi:[6,3,1,""],get:[6,3,1,""],get_multi:[6,3,1,""],key:[6,3,1,""],put:[6,3,1,""],put_multi:[6,3,1,""],query:[6,3,1,""],transaction:[6,3,1,""]},"gcloud.datastore.connection":{Connection:[6,2,1,""]},"gcloud.datastore.connection.Connection":{API_URL_TEMPLATE:[6,1,1,""],API_VERSION:[6,1,1,""],SCOPE:[6,1,1,""],allocate_ids:[6,3,1,""],begin_transaction:[6,3,1,""],build_api_url:[6,3,1,""],commit:[6,3,1,""],lookup:[6,3,1,""],rollback:[6,3,1,""],run_query:[6,3,1,""]},"gcloud.datastore.entity":{Entity:[7,2,1,""]},"gcloud.datastore.entity.Entity":{exclude_from_indexes:[7,1,1,""],kind:[7,1,1,""]},"gcloud.datastore.key":{Key:[8,2,1,""]},"gcloud.datastore.key.Key":{completed_key:[8,3,1,""],dataset_id:[8,1,1,""],flat_path:[8,1,1,""],id:[8,1,1,""],id_or_name:[8,1,1,""],is_partial:[8,1,1,""],kind:[8,1,1,""],name:[8,1,1,""],namespace:[8,1,1,""],parent:[8,1,1,""],path:[8,1,1,""],to_protobuf:[8,3,1,""]},"gcloud.datastore.query":{Iterator:[9,2,1,""],Query:[9,2,1,""]},"gcloud.datastore.query.Iterator":{next_page:[9,3,1,""]},"gcloud.datastore.query.Query":{OPERATORS:[9,1,1,""],add_filter:[9,3,1,""],ancestor:[9,1,1,""],dataset_id:[9,1,1,""],fetch:[9,3,1,""],filters:[9,1,1,""],group_by:[9,1,1,""],keys_only:[9,3,1,""],kind:[9,1,1,""],namespace:[9,1,1,""],order:[9,1,1,""],projection:[9,1,1,""]},"gcloud.datastore.transaction":{Transaction:[10,2,1,""]},"gcloud.datastore.transaction.Transaction":{begin:[10,3,1,""],commit:[10,3,1,""],current:[10,3,1,""],id:[10,1,1,""],rollback:[10,3,1,""]},"gcloud.exceptions":{BadRequest:[11,4,1,""],ClientError:[11,4,1,""],Conflict:[11,4,1,""],Forbidden:[11,4,1,""],GCloudError:[11,4,1,""],InternalServerError:[11,4,1,""],LengthRequired:[11,4,1,""],MethodNotAllowed:[11,4,1,""],MovedPermanently:[11,4,1,""],NotFound:[11,4,1,""],NotImplemented:[11,4,1,""],NotModified:[11,4,1,""],PreconditionFailed:[11,4,1,""],Redirection:[11,4,1,""],RequestRangeNotSatisfiable:[11,4,1,""],ResumeIncomplete:[11,4,1,""],ServerError:[11,4,1,""],ServiceUnavailable:[11,4,1,""],TemporaryRedirect:[11,4,1,""],TooManyRequests:[11,4,1,""],Unauthorized:[11,4,1,""],eklass:[11,1,1,""],make_exception:[11,5,1,""]},"gcloud.exceptions.BadRequest":{code:[11,1,1,""]},"gcloud.exceptions.Conflict":{code:[11,1,1,""]},"gcloud.exceptions.Forbidden":{code:[11,1,1,""]},"gcloud.exceptions.GCloudError":{code:[11,1,1,""],errors:[11,1,1,""]},"gcloud.exceptions.InternalServerError":{code:[11,1,1,""]},"gcloud.exceptions.LengthRequired":{code:[11,1,1,""]},"gcloud.exceptions.MethodNotAllowed":{code:[11,1,1,""]},"gcloud.exceptions.MovedPermanently":{code:[11,1,1,""]},"gcloud.exceptions.NotFound":{code:[11,1,1,""]},"gcloud.exceptions.NotImplemented":{code:[11,1,1,""]},"gcloud.exceptions.NotModified":{code:[11,1,1,""]},"gcloud.exceptions.PreconditionFailed":{code:[11,1,1,""]},"gcloud.exceptions.RequestRangeNotSatisfiable":{code:[11,1,1,""]},"gcloud.exceptions.ResumeIncomplete":{code:[11,1,1,""]},"gcloud.exceptions.ServiceUnavailable":{code:[11,1,1,""]},"gcloud.exceptions.TemporaryRedirect":{code:[11,1,1,""]},"gcloud.exceptions.TooManyRequests":{code:[11,1,1,""]},"gcloud.exceptions.Unauthorized":{code:[11,1,1,""]},"gcloud.pubsub":{client:[14,0,0,"-"],connection:[14,0,0,"-"],subscription:[15,0,0,"-"],topic:[16,0,0,"-"]},"gcloud.pubsub.client":{Client:[14,2,1,""]},"gcloud.pubsub.client.Client":{list_subscriptions:[14,3,1,""],list_topics:[14,3,1,""],topic:[14,3,1,""]},"gcloud.pubsub.connection":{Connection:[14,2,1,""]},"gcloud.pubsub.connection.Connection":{API_BASE_URL:[14,1,1,""],API_URL_TEMPLATE:[14,1,1,""],API_VERSION:[14,1,1,""],SCOPE:[14,1,1,""]},"gcloud.pubsub.subscription":{Subscription:[15,2,1,""]},"gcloud.pubsub.subscription.Subscription":{"delete":[15,3,1,""],acknowledge:[15,3,1,""],create:[15,3,1,""],exists:[15,3,1,""],from_api_repr:[15,6,1,""],modify_ack_deadline:[15,3,1,""],modify_push_configuration:[15,3,1,""],path:[15,1,1,""],pull:[15,3,1,""],reload:[15,3,1,""]},"gcloud.pubsub.topic":{Batch:[16,2,1,""],Topic:[16,2,1,""]},"gcloud.pubsub.topic.Batch":{commit:[16,3,1,""],publish:[16,3,1,""]},"gcloud.pubsub.topic.Topic":{"delete":[16,3,1,""],batch:[16,3,1,""],create:[16,3,1,""],exists:[16,3,1,""],from_api_repr:[16,6,1,""],full_name:[16,1,1,""],path:[16,1,1,""],project:[16,1,1,""],publish:[16,3,1,""],subscription:[16,3,1,""]},"gcloud.resource_manager":{client:[19,0,0,"-"],connection:[19,0,0,"-"],project:[20,0,0,"-"]},"gcloud.resource_manager.client":{Client:[19,2,1,""]},"gcloud.resource_manager.client.Client":{fetch_project:[19,3,1,""],from_service_account_json:[19,6,1,""],from_service_account_p12:[19,6,1,""],list_projects:[19,3,1,""],new_project:[19,3,1,""]},"gcloud.resource_manager.connection":{Connection:[19,2,1,""]},"gcloud.resource_manager.connection.Connection":{API_BASE_URL:[19,1,1,""],API_URL_TEMPLATE:[19,1,1,""],API_VERSION:[19,1,1,""],SCOPE:[19,1,1,""]},"gcloud.resource_manager.project":{Project:[20,2,1,""]},"gcloud.resource_manager.project.Project":{"delete":[20,3,1,""],create:[20,3,1,""],exists:[20,3,1,""],from_api_repr:[20,6,1,""],full_name:[20,1,1,""],path:[20,1,1,""],reload:[20,3,1,""],set_properties_from_api_repr:[20,3,1,""],undelete:[20,3,1,""],update:[20,3,1,""]},"gcloud.storage":{acl:[21,0,0,"-"],blob:[22,0,0,"-"],bucket:[23,0,0,"-"],client:[24,0,0,"-"],connection:[24,0,0,"-"]},"gcloud.storage.acl":{ACL:[21,2,1,""],BucketACL:[21,2,1,""],DefaultObjectACL:[21,2,1,""],ObjectACL:[21,2,1,""]},"gcloud.storage.acl.ACL":{add_entity:[21,3,1,""],all:[21,3,1,""],all_authenticated:[21,3,1,""],clear:[21,3,1,""],client:[21,1,1,""],domain:[21,3,1,""],entity:[21,3,1,""],entity_from_dict:[21,3,1,""],get_entities:[21,3,1,""],get_entity:[21,3,1,""],group:[21,3,1,""],has_entity:[21,3,1,""],loaded:[21,1,1,""],reload:[21,3,1,""],reload_path:[21,1,1,""],reset:[21,3,1,""],save:[21,3,1,""],save_path:[21,1,1,""],user:[21,3,1,""]},"gcloud.storage.acl.BucketACL":{client:[21,1,1,""],reload_path:[21,1,1,""],save_path:[21,1,1,""]},"gcloud.storage.acl.ObjectACL":{client:[21,1,1,""],reload_path:[21,1,1,""],save_path:[21,1,1,""]},"gcloud.storage.blob":{Blob:[22,2,1,""]},"gcloud.storage.blob.Blob":{"delete":[22,3,1,""],acl:[22,1,1,""],cache_control:[22,1,1,""],chunk_size:[22,1,1,""],client:[22,1,1,""],component_count:[22,1,1,""],content_disposition:[22,1,1,""],content_encoding:[22,1,1,""],content_language:[22,1,1,""],content_type:[22,1,1,""],crc32c:[22,1,1,""],download_as_string:[22,3,1,""],download_to_file:[22,3,1,""],download_to_filename:[22,3,1,""],etag:[22,1,1,""],exists:[22,3,1,""],generate_signed_url:[22,3,1,""],generation:[22,1,1,""],id:[22,1,1,""],make_public:[22,3,1,""],md5_hash:[22,1,1,""],media_link:[22,1,1,""],metadata:[22,1,1,""],metageneration:[22,1,1,""],owner:[22,1,1,""],path:[22,1,1,""],path_helper:[22,7,1,""],public_url:[22,1,1,""],self_link:[22,1,1,""],size:[22,1,1,""],storage_class:[22,1,1,""],time_deleted:[22,1,1,""],updated:[22,1,1,""],upload_from_file:[22,3,1,""],upload_from_filename:[22,3,1,""],upload_from_string:[22,3,1,""]},"gcloud.storage.bucket":{Bucket:[23,2,1,""]},"gcloud.storage.bucket.Bucket":{"delete":[23,3,1,""],acl:[23,1,1,""],blob:[23,3,1,""],client:[23,1,1,""],configure_website:[23,3,1,""],copy_blob:[23,3,1,""],cors:[23,1,1,""],create:[23,3,1,""],default_object_acl:[23,1,1,""],delete_blob:[23,3,1,""],delete_blobs:[23,3,1,""],disable_logging:[23,3,1,""],disable_website:[23,3,1,""],enable_logging:[23,3,1,""],etag:[23,1,1,""],exists:[23,3,1,""],get_blob:[23,3,1,""],get_logging:[23,3,1,""],id:[23,1,1,""],lifecycle_rules:[23,1,1,""],list_blobs:[23,3,1,""],location:[23,1,1,""],make_public:[23,3,1,""],metageneration:[23,1,1,""],owner:[23,1,1,""],path:[23,1,1,""],path_helper:[23,7,1,""],project_number:[23,1,1,""],rename_blob:[23,3,1,""],self_link:[23,1,1,""],storage_class:[23,1,1,""],time_created:[23,1,1,""],versioning_enabled:[23,1,1,""]},"gcloud.storage.client":{Client:[24,2,1,""]},"gcloud.storage.client.Client":{batch:[24,3,1,""],bucket:[24,3,1,""],connection:[24,1,1,""],create_bucket:[24,3,1,""],current_batch:[24,1,1,""],get_bucket:[24,3,1,""],list_buckets:[24,3,1,""],lookup_bucket:[24,3,1,""]},"gcloud.storage.connection":{Connection:[24,2,1,""]},"gcloud.storage.connection.Connection":{API_BASE_URL:[24,1,1,""],API_URL_TEMPLATE:[24,1,1,""],API_VERSION:[24,1,1,""],SCOPE:[24,1,1,""]},gcloud:{client:[11,0,0,"-"],connection:[11,0,0,"-"],credentials:[11,0,0,"-"],exceptions:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"],"7":["py","staticmethod","Python static method"],"8":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:class","3":"py:method","4":"py:exception","5":"py:function","6":"py:classmethod","7":"py:staticmethod","8":"py:data"},terms:{"09df":4,"3xx":11,"4ae0":4,"4xx":11,"5xx":11,"__exit__":17,"__init__":11,"__key__":9,"_aclent":21,"_basejob":2,"_blobiter":23,"_connection_class":11,"_datastore_v1_pb2":[5,6,8],"_enumproperti":2,"_helper":[22,23],"_projectiter":19,"_propertymixin":[22,23],"_serviceaccountcredenti":11,"_target_object":11,"abstract":[5,9,10,11,21],"boolean":[0,3,6,8,9,11,14,15,16,21,22,23],"byte":[2,3,5,7,9,16,22],"case":[5,7,12,19,22],"catch":24,"class":[0,1,2,3,5,6,7,8,9,10,11,12,14,15,16,19,20,21,22,23,24],"default":[0,1,3,4,5,6,9,10,11,12,14,17,19,20,21,22,23,24],"enum":2,"final":8,"float":[3,9],"function":[11,22],"import":[4,5,6,9,10,12,13,17,18,19,20,21,23],"int":[0,1,4,11,14,15,16,19,22],"long":[11,22,23],"new":[0,1,4,8,11,12,15,17,18,19,20,21,23,24],"public":[22,23],"return":[0,1,2,3,5,6,7,8,9,10,11,14,15,16,19,20,21,22,23,24],"short":21,"static":[22,23],"true":[0,4,6,8,11,15,16,17,20,21,22,23],"try":[10,11,13,18,22,23,24],"while":[4,11,19],abel:4,abil:5,abl:[11,13,21,22],about:[11,22,23],abov:[12,19],absenc:22,accept:[8,11,12],access:[1,4,11,12,18,21,22,23],access_gr:1,accessgr:1,accesslog:23,accident:23,account:11,ack:[15,17],ack_deadlin:[15,16,17],ack_id:[15,17],acknowledg:[15,16,17],across:4,act:[0,7,11,14,24],action:4,activ:[6,20,24],actual:[7,12,18,20,21],adamson:4,add:[5,11,12,16,21,23],add_auto_id_ent:5,add_ent:21,add_filt:[6,9],addit:11,address:21,advanc:[6,11],after:[4,7,12,17,19,21],again:7,against:[4,9,11],age_count:4,agent:11,agre:16,akin:7,alia:11,all:[4,7,8,12,17,18,19,21,22,23,24],all_authent:21,alloc:6,allocate_id:6,allocateid:6,allow:[2,4,7,11,13,22],allow_jagged_row:2,allow_large_result:2,allow_quoted_newlin:2,allowjaggedrow:2,allowlargeresult:2,allowquotednewlin:2,allus:21,along:6,alread:5,alreadi:[5,10,20,21,23,24],also:[5,10,11,12,20,21,23],altern:[4,21],alwai:[18,19],amount:22,ancestor:9,ani:[5,6,7,11,19,20,21,22],anoth:[0,1,4,14,17],anyth:[19,21,23],api:[0,1,2,3],api_access_endpoint:11,api_bas:6,api_base_url:[0,6,11,14,19,24],api_request:11,api_url_templ:[0,6,11,14,19,24],api_vers:[0,6,11,14,19,24],app:11,appar:23,appassertioncredenti:[11,12],append:4,appendix:22,appengin:[11,12],appli:[4,6,9],applic:[4,12,15,16,17,21,22],approv:23,apt:13,arbitrari:22,arg:[11,19],argument:[6,8,11,12],around:[11,22],assembl:11,assert:10,assign:[5,7,9,10,16,23],associ:[0,1,8,11,14,18,19,20,22,24],assum:[3,11],asynchron:[0,2],attach:11,attempt:[4,23],attr1:17,attr2:17,attr:16,attribut:[3,6,11,16,17,23],august:18,auth:[0,6,11,12,14,18,19,24],authent:[0,4,6,11],authorized_us:11,automat:[5,7,10,18,19],avail:[10,15,22,23,24],avro:2,back:[0,1,3,4,5,6,7,10,11,14,15,16,17,19,20,21,22,23,24],backend:[6,7,23],background:4,bad:11,badrequest:11,base:[0,1,2,3,5,6,7,8,9,10],base_url:6,basi:21,basic:[6,8,11],batch:[2,3],bcp47:22,bearer:11,becaus:[10,12],been:[5,8,9,22],befor:22,beforehand:13,begin:[4,5,6,9,10,22,24],begin_transact:6,begintransact:6,begintransactionrespons:6,begun:[10,20],behalf:[0,11,14,24],behavior:[11,19],belong:[6,15,21,22,24],below:18,between:6,beverli:4,beyond:3,bill:[4,12],birth_dat:4,bit:12,blank:21,blob:[2,11,13,21],blob_nam:[22,23],blob_valu:[5,7],block:[5,10,15,17],bodi:[11,12],bool:20,both:[4,6,12,17],bound:[0,1,3,4,6,11,14,16,19,21,22,23,24],bowman:4,breviti:21,bucket:[4,11,13,21,22],bucket_nam:[4,21,23,24],bucket_path:22,bucketacl:21,build:[0,5,6,10,11,14,19,21,24],build_api_url:[6,11],built:[5,7],builtin:7,bulk:[5,10],bundl:[0,11,14,19,24],cach:22,cache_control:22,call:[0,1,3,4,5,6,10,11,12,14,15,16,18,19,20,23,24],callabl:23,callback:23,caller:11,can:[0,1,3,4,5,7,10,11,12,13,14,16,17,18,19,20,21,22,24],cannot:[4,11,20],capabl:[6,11],certain:22,chain:21,chang:[4,7,9,20,21],check:[4,11,12,17,19,21,24],checksum:22,child:8,chunk:[22,23],chunk_siz:[22,23],classmethod:[1,3,4,11,15,16,19,20],clear:21,click:12,client_email:11,client_id:11,client_secret:11,clienterror:11,clientsecret:11,clone:13,close:[4,11],cloud:[0,1,2,3,4,5,6,7,9,11,12],cloudresourcemanag:19,cloudstorag:[0,2],code:[5,10,11,12],collect:[4,5,16],color:[19,20],column:3,com:[0,1,2,3,4,5,6,11,12,13,14,15,16,17,19,20,21,22,23,24],come:6,command:[11,18],commit:[5,6,10,16],compat:21,complet:[4,5,6,10,11,19],completed_kei:8,complex:12,compon:[11,22],component_count:22,compos:22,compress:2,comput:11,concept:[5,22,23],concret:11,configur:[0,1,2],configure_websit:23,conflict:[11,12,23,24],connection_typ:11,consist:[6,8],consol:[4,6,11,12],constant:11,construct:[0,1,3,6,11,14,15,16,20,21],constructor:[4,11,12,14,23,24],consum:[0,6,14,19,24],contain:[1,3,4,6,11,20,21,23],content:[11,13,22],content_disposit:22,content_encod:22,content_languag:22,content_md5:11,content_typ:[11,22],contentlanguag:23,context:[5,6,10,16,17],continu:19,control:[4,9,21,22],conveni:[6,9,12],convert:[7,17],copi:[0,2,3],copy_blob:23,copy_t:0,copy_to:4,copyjob:[0,2],cor:23,correct:[11,12],correspond:[3,5,8,11,21,22],costli:23,could:[7,23],count:[2,3,4,22],cousin:11,cowardli:23,crc32c:22,creat:[0,1,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24],create_bucket:24,create_disposit:2,create_if_need:2,create_nev:2,createdisposit:2,creation:[1,3,12],cred:4,credenti:[0,1,2,4,6],crypto:13,csv:[2,4],current:[0,1,3,5,6,7,8,9,10,11,14,15,16,18,19,20,21,22,23,24],current_batch:[6,24],current_d:4,current_transact:6,cursor:[3,6,9],custom:11,cycl:18,data:[0,2,3],databas:[7,13],dataset:0,dataset_id:[1,5,6,8,9],dataset_nam:[3,4],datast:[1,3],datastor:5,datastore_backup:2,datastore_batch_oper:5,datastore_pb:6,datastoreservic:6,date:3,datediff:4,datetim:[1,3,4,9,11,22,23],deadlin:[15,16,17],deal:6,decod:7,default_dataset:2,default_object_acl:23,default_table_expiration_m:[1,4],defaultobjectacl:[21,23],defer:[6,11],defin:[0,1,2,3,6,11,12,14,15,16,19,22,24],delet:[1,3,4,5,6,7,10,15,16,17,18,20,22,23],delete_blob:[22,23],delete_in_progress:20,delete_multi:6,delete_request:20,delimit:23,delimt:23,deliveri:23,demand:[22,23],depend:[12,22],deriv:[1,3,10],descend:9,describ:[2,3,4,11,12,23],descript:[1,3,4],deseri:12,destin:[0,2,4],destination_bucket:23,destination_format:[2,4],destination_t:[2,4],destination_uri:[0,2],destinationformat:2,destinationt:2,detail:[11,19,22,23],detect:11,determin:[4,17,22,23],dev:13,develop:[4,11,12,23],devstorag:[12,24],dict:[1,3,7,8,11,15,16,19,20,21,22,23],dictionari:[7,8,11,19,21,23],differ:[11,12,18],directli:[4,6,11,12,17],directori:23,disabl:[19,23],disable_log:23,disable_websit:23,discoveri:11,discuss:12,displai:[19,20],disposit:22,distinct:6,do_some_work:[5,10],do_someth:4,doc:[0,1,2,3,5,11,22,23],document:[11,22],doe:[5,6,8,16,19,23,24],doesn:[20,21,23],doesnt:[23,24],domain:[4,21,23],don:[5,9,10,12,18,22],done:[4,5,11,21],down:12,download:[11,12,22],download_as_str:22,download_to_fil:22,download_to_filenam:22,drop:12,duplic:[3,7,23],dur:5,durabl:[22,23],durable_reduced_avail:[22,23],dure:[5,17],e3344fba:4,each:[4,7,9,11,16,19,21,23,24],easiest:12,easili:12,effect:[10,22,23],either:[4,8,10,11,21,22],eklass:11,element:[8,10],els:[10,17,22,23],elsewher:[11,12],email:[6,12],empti:[6,11,23],emul:[16,23],enabl:[12,23],enable_log:23,encod:[2,7,22],end:[3,4,7,9,15,16,17],end_cursor:9,endpoint:[11,15,17],engin:11,ensur:3,enter:10,entir:[7,12],entiti:[1,4,5,6],entity1:[5,10],entity2:[5,10],entity_dict:21,entity_from_dict:21,entity_id:1,entity_typ:[1,4,21],entitykind:[7,8],entri:[5,21],env_filt:19,environ:[0,4,6,11],equal:6,equival:9,error:[3,5,10,11,19],error_info:11,etag:[1,3,22,23],etc:[11,21],even:[8,15,21],eventu:6,everi:[5,12],everyth:13,exampl:[4,5,9,10,11,12,17,18,19,21,23,24],except:[5,10],exclude_from_index:7,execut:[0,4,5,9,10],exist:[1,3,4,5,6,7,8,10,12,15,16,17,18,19,20,21,22,23,24],exit:[5,10],expect:[4,11],expect_json:11,expir:[1,3,4,11,22],explicit:[4,11],explicitli:[5,10,11,22],export_to_storag:4,express:9,extra:[7,8,11],extract:[0,2,4],extract_table_to_storag:0,extracttabletostoragejob:[0,2],extrem:23,factori:[1,3,4,6,11,12,15,16,19,20,21,23,24],fail:[11,20],fall:[0,1,3,6,11,14,15,16,19,20,21,22,23,24],fals:[0,4,6,14,15,16,20,21,22,23],far:5,favor:6,fddee34b3840:4,featur:18,fetch:[3,6,9,17,19],fetch_data:3,fetch_pag:6,fetch_project:[18,19],few:11,field:[2,3,4,7,9,21,23,24],field_delimit:2,field_typ:3,fielddelimit:2,file:[0,2,4,11,12,13,22,23],file_obj:[4,22],filenam:[22,23],filesystem:22,fill:6,filter:[9,19,23,24],filter_param:19,find:[12,23],fine:9,first:[0,1,4,11,12,14,17,23,24],firstnam:4,flag:[11,21],flat_path:8,flatten_result:2,flattenresult:2,floor:4,flow:12,focu:12,focus:18,follow:[5,10,11,12,18,21,22],foo:8,forbidden:11,forc:23,forget:18,form:9,format:11,found:[11,23,24],friendly_nam:[1,3,4],from:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],from_api_repr:[1,3,15,16,20],from_json:12,from_service_account_json:[4,11,12,17,19],from_service_account_p12:[4,11,12,17,19],fstat:22,full:[8,18,21,23,24],full_control:[12,24],full_nam:[4,16,20],fulli:[13,16,20],further:3,futur:23,gae:4,gce:[4,11,12,22],gcloud:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],gcloud_project:[4,17],gclouderror:11,gener:[4,6,10,11,12,22],generate_signed_url:[11,22],get:[1,3,4,6,7,9,11,12],get_application_default:12,get_blob:23,get_bucket:[13,21,23,24],get_connect:11,get_credenti:11,get_ent:21,get_for_service_account_json:11,get_for_service_account_p12:11,get_log:23,get_multi:6,getter:[5,8,10,11,21,22],git:13,github:[11,13,22],give:[11,22],given:[1,3,6,9,11,14,15,16,20,22,23],glob:19,global:20,goe:4,googl:[0,1,2,3,4,5,6,11],google_application_credenti:[4,11,12,17],googleapi:[0,6,11,12,14,19,24],googlecloudplatform:[11,13,22],googlecredenti:[11,12],grant:[1,4,12,21],grant_:21,grant_own:21,grant_read:21,grant_writ:21,granular:21,group:[5,9,21],group_bi:9,groupbyemail:1,guess:22,guess_typ:22,guid:12,gzip:2,handl:[11,12,22],happen:[17,21],hard:12,has_ent:21,hash:[11,22],have:[4,6,8,10,11,12,13,15,18,21,22],header:[4,11,12,22],here:[4,18,19],hidden:0,hierarchi:23,hold:[1,2,4,9,15,16,17,23],hood:[6,11,21],hook:17,hope:12,host:[1,3,23],howev:[5,6,7,10,11,12],html:[11,22,23],http:[0,1,2,3,5,6,11,12,14,15,16,17,19,20,22,23,24],httplib2:[0,6,11,12,14,19,24],id_or_nam:8,ident:[3,21],identifi:[3,8,21],ietf:[22,23],ignor:3,ignore_unknown_valu:[2,3],ignoreunknownvalu:2,immut:8,implement:[6,11,12,23,24],implicit:[9,11],implicitli:[4,8,11,17],includ:[0,4,9,23,24],include_al:0,incompat:6,incomplet:[3,11],incomplete_kei:6,increas:21,index:[3,7,23],indic:[0,1,6,8,11,14],individu:[1,3,23],infer:[0,4,6,11,12,14,19,24],info:[22,23],inform:[11,19],infrastructur:13,inherit:4,initi:[10,11],input_fil:2,input_file_byt:2,insensit:19,insert:[1,3],insert_auto_id:[5,10],insert_data:3,insertal:3,insertdata:12,insid:[5,10,18,23],instal:13,instanc:[0,1,3,4,5,7,8,11,12,15,19,20],instanti:[23,24],instead:11,instruct:12,integ:[1,2,3,4,6,8,9,22,23,24],intend:[11,12],interact:[0,2,5,8,9,10,11,12,14,19,21,22,23,24],intern:[6,11],internalservererror:11,invalid:[1,3,9],invok:6,is_parti:[8,10],isn:[23,24],iso:2,iso_8559_1:2,isol:[6,10],issu:[11,22],item:[19,23,24],iter:[9,19,21,22,23,24],itself:5,jame:9,job:0,job_complet:4,job_id:4,jrandom:4,json:[0,4,11,12,14,19,22,24],json_api:[11,22,23],json_credentials_path:11,jsonclient:[0,11,14,24],jsonconnect:[0,11,14,19,24],just:[6,7,12,22,23,24],keep:5,kei:[3,5,6,7],key3:5,key_pb:6,keyfil:12,keys_onli:9,keyword:[6,8,11],kind:[6,7,8,9],know:7,known:[11,21],kwarg:[6,8,11,19],label:[19,20],lambda:23,languag:[22,23,24],larg:23,last:[1,3,8],last_nam:4,later:[11,17,20],latest:[11,20],left:21,length:[8,11],lengthrequir:11,level:[4,6,9,11],librari:[4,11,12,13,18],libssl:13,life:18,lifecycl:[22,23],lifecycle_rul:23,lifecyclest:20,like:[7,11,12,18,21,22,23],limit:[9,14,17],line:11,link:[22,23],list:[0,1,2,3,4,5,6,8,9,11,14,15,17,18,19,20,21,23,24],list_blob:23,list_bucket:24,list_dataset:[0,4],list_project:[18,19],list_subscript:[14,17],list_tabl:[1,4],list_top:[14,17],live:6,load:[0,2,4,12,19,21],load_from_fil:4,load_from_storag:4,load_table_from_storag:0,loadtablefromstoragejob:[0,2],local:[3,4,12,15,20,22,23],locat:[1,3,4,23],log:[22,23],logbucket:23,login:[12,18],logobjectprefix:23,longer:4,look:[6,18],lookup:[6,21],lookup_bucket:24,low:9,machin:12,made:[4,12,20],mai:[3,8,11,12],mail:[11,21],main:23,main_page_suffix:23,major:12,make:[0,5,6,9,11,14,19,21,22,23,24],make_except:11,make_publ:[22,23],manag:[4,5,10,13,16],mani:[11,12],manipul:21,manual:10,map:[3,4,5,6,9,11,15,22,23],marker:[0,1,14,23,24],match:[5,6,9,24],max_bad_record:2,max_messag:[15,17],max_result:[0,1,3,4,23,24],maxbadrecord:2,maximum:[0,1,3,14,15,19,23,24],md5:[11,22],md5_hash:22,mean:[7,10,11,18,20,23],media:22,media_link:22,mention:12,messag:[11,15,16],message_id1:17,message_id2:17,message_id:17,message_payload:17,metadata:[4,19,20,21,22],metagener:[22,23],meth:[4,16],method:[3,5,6,10,11,12,18,20,21,22,23],method_nam:12,methodnotallow:11,might:7,millisecond:1,mime:11,mimetyp:22,miss:6,mode:[3,4],modif:[1,3],modifi:[1,3,11,18],modify_ack_deadlin:15,modify_push_configur:[15,17],modifypushconfig:15,more:[0,1,3,4,6,9,14,15,19,23],more_result:[6,9],move:[11,20],movedperman:11,multipl:[5,6,19,22,23],must:[4,6,11,12,15,16,17,22,23,24],mutabl:[7,21],mutat:[5,6,10],mutation_pb:6,mutationresult:6,mutuat:[5,10],mykind:6,name:[0,1,2,3,4,6,7,8,9,11,13,14,15,16,17,18,19,20,22,23,24],namespac:[5,6,8,9],navig:12,nearlin:[22,23],necessari:10,need:[0,5,11,12,14,19,23,24],neither:11,never:22,new_nam:23,new_project:[18,19,20],newest:20,newli:[15,23,24],newline_delimited_json:2,next:[0,1,3,14,23,24],next_pag:9,next_page_token:[4,17],nextpagetoken:[23,24],noacl:[23,24],non:[6,11,13,17,21],none:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24],nonetyp:[0,1,2,3,6,8,11,14,15,16,19,20,21,22,23,24],nor:11,not_found_pag:23,note:[17,21],notfound:[11,19,22,23,24],notimpl:11,notimplementederror:19,notmodifi:11,nullabl:[3,4],num_byt:3,num_id:6,num_retri:22,num_row:3,number:[0,1,3,6,9,14,15,17,19,22,23,24],oauth2:[0,6,11,14,19,22,24],oauth2client:[0,6,11,12,14,19,22,24],oauth2credenti:[0,6,11,14,19,22,24],object:[0,1,3,4,5,6,7,8,9,11,12,14,15,16,17,19,20,21],object_name_glob:4,object_prefix:23,objectacl:21,obtain:6,occur:3,octet:22,odd:8,offici:7,offset:9,old:23,on_error:23,onc:[5,10,18,23],one_day_m:4,onli:[3,6,7,8,9,11,12,17,19,22,23],opaqu:[0,1,3,14,23,24],open:[4,22],openssl:13,operatiuon:5,option:[0,3,6,7,9,11,12,14,19,21,22,23,24],order:[5,9,11,12,21,23],org:[11,21,22,23],other:[2,7,11,12,18,21],otherwis:23,our:[5,6,22,23],output_byt:2,output_row:2,over:[5,6,9,11],overrid:4,overridden:5,overwrit:[20,22],own:[0,6,11,12,14,19,21,23,24],owner:[1,4,21,22,23],p12:[4,11,12,19],packag:[11,12,13],page:[0,1,9,14,19,23,24],page_s:[14,19],page_token:[0,1,3,14,23,24],pair:[16,21],param:6,paramet:[0,1,2,3,5,6,7,8,9,10,11,14,15,16,19,20,21,22,23,24],parent:[7,8,19,21],parent_kei:8,pars:[1,3,11,15,16,22,23],part:[5,9,12,18],partial:[5,6,7,8,23,24],particular:[0,6,11,14,19,21,24],particularli:22,pass:[0,1,3,4,6,8,9,11,12,14,15,16,19,20,21,22,23,24],patch:[1,3,4,21],path:[0,1,3,4,8,11,12,14,15,16,19,20,21,22,23,24],path_arg:[6,8],path_help:[22,23],payload:16,peform:4,pend:17,per:[3,21,22,23],period:[4,22],perman:[9,11],permiss:[4,21],persist:7,person:[4,9,12,13],person_ag:4,person_ages_copi:4,pick:[4,18],piec:11,pip:13,pkcs12:[11,12],place:12,plain:22,plan:11,platform:[0,11,12,14,18,19,20],plu:[0,1,14],point:[3,11,12],pointer:[7,11],polici:[4,22,23],poll:4,popul:24,posit:11,possibl:[3,7,12,22],post:[3,11,16,20],preced:11,precompil:13,precondit:11,preconditionfail:11,prefix:[4,23,24],prepend:9,pretti:18,prevent:23,primit:11,print:[18,19,21,23,24],print_head:[2,4],printhead:2,prioriti:2,privat:11,private_kei:11,private_key_id:11,private_key_path:11,probabl:23,problem:3,process:12,prod:19,product:[11,12,20],programmat:18,project:[0,1,2,3],project_filt:19,project_id:[4,19,20],project_numb:23,propag:[22,23],proper:11,properti:[1,2,3,4,5,6,7,9,12,19,20,22,23,24],property_nam:9,protect:11,protobuf:[5,6,8,9],protocol:11,provid:[4,5,6,10,11],proxi:6,pseudo:2,pub:12,public_url:22,publicli:22,publish:[15,16],pubsub:[0,4,11,12,14,15,16,17,20],pull:[15,16],purpl:20,push:[15,16,17],push_endpoint:[15,16,17],put:[1,3,5,6,7,10,13,15,16,20],put_multi:[6,7,10],pycrypto:13,pyopenssl:13,python2:[5,7],python3:[5,7],python:[7,11,12,13,18,22],qualifi:[16,20],queri:[0,2,3],query_async:4,query_param:11,query_pb:6,queryprior:2,quick:18,quot:2,quote_charact:2,rais:[1,3,5,6,8,9,10,11,16,19,22,23,24],rang:11,rather:[11,12,22,24],reach:20,read:[6,12,21,22],read_onli:[12,24],read_writ:[12,24],reader:[1,4],readi:11,realli:23,reason:[11,12,18],receiv:[15,16,17],recommend:[11,12],record:3,recov:18,recurs:23,recv:17,redirect:11,reduc:[22,23],refer:[0,1,2,3,10,11,14,15,16,19,20,21],referenc:11,refresh:[1,3,4,11],refresh_token:11,refus:23,regular:7,rel:[22,23],relat:[7,11,13,21,23],relev:19,reli:7,reload:[1,3,4,15,19,20,21],reload_data:20,reload_path:21,remain:[8,11],rememb:5,remov:[3,5,21],renam:23,rename_blob:23,repeat:3,replac:[4,5],repositori:13,repres:[1,3,4,5,6,7,8,9,10,11,21,23],represent:[1,3,8,15,16,20],request:[0,1,3,4,5,6,9,11,12,14,15,16,17,19,20,21,22,23,24],requestrangenotsatisfi:11,requir:[0,1,2,3,4,6,7,8,9,11,12,14,16,19,22,23,24],reset:21,resouc:19,resourc:[1,3,11,15,16],resource_manag:[18,19,20],respons:[11,23,24],rest:[0,1,3,14,15,16,18,19,20,24],restor:20,restrict:9,result:[0,3,4,6,9,14,19,24],resum:11,resumeincomplet:11,retri:22,retriev:[0,1,6,7,11,12,14,15,19,20,22,23],retry_count:4,return_immedi:[15,17],revok:21,revoke_:21,revoke_own:21,revoke_read:21,revoke_writ:21,rewind:22,rfc2616:[11,22,23],rfc3339:[22,23],rfc4960:22,rfc6266:22,rfc7231:22,rfc7234:22,rfc:16,role:[1,4,21,22,23],roll:[5,10],rollback:[5,6,10],root:6,row:[2,3,4,7],row_data:3,row_id:3,rpc:6,rule:[21,23],run:[0,4,5,6,12,18],run_async_queri:0,run_queri:6,runasyncqueryjob:[0,2],runqueri:6,runtim:23,sai:23,salli:9,same:[5,8,10,21,23],satisfi:11,save:[2,5,6,7,10,16,20,21],save_path:21,schema:[1,2,3,4],schemafield:[1,2,3,4],schemaless:13,scope:[0,6,11,12,14,19,24],screen:12,sdk:[12,18],search:12,sec10:11,second:[11,15,16,17],secret:[11,12],section:[18,22,23],see:[0,1,2,3,5,11,12,14,15,16,19,20,22,23],seek:[11,22],select:[4,12],selector:[23,24],self:[22,23],self_link:[1,3,22,23],send:[5,6,11,12,16,17,20,21],sent:5,separ:[12,23],sequenc:[0,2,7,9,15,23],serial:12,serializ:6,serv:9,server:[1,2,3,4,5,6,11,16],servererror:11,servic:[4,7,11],service_account:11,serviceunavail:11,set:[0,1,2,3,4,5,6,7,8,9,10,11],set_properties_from_api_repr:20,setup:13,sever:4,shortcut:23,should:[6,11,12,18,22,23],shouldn:[6,11],side:10,sign:[11,12,21,22],signatur:12,signedjwtassertioncredenti:11,simpl:[11,18],simplest:12,simpli:[11,18,23,24],simultan:12,sinc:19,singl:[3,5,6,7,9,11,16,17,19],situat:12,size:[3,22,23],skip:3,skip_invalid_row:3,skip_leading_row:[2,4],skipleadingrow:2,skipped_result:6,sleep:4,slightli:18,slow:23,snapshot:6,snippet:[5,10],some:[11,12,18],someexcept:10,somehow:23,someth:[18,23],sorri:24,sort:9,sourc:[0,1,2,3,5,6,7,8,9,10,11,13,14,15,16,19,20,21,22,23,24],source_format:[2,4],source_t:4,source_uri:[0,2],sourceformat:2,spaceship:20,special:21,specialgroup:1,specif:[4,11,12,20,21,22,23],specifi:[9,20,23,24],specifyingloc:23,sql:[0,2,3],stack:[6,10,24],stage:19,standard:[11,22,23],start:[4,12],start_cursor:9,state:[4,5,9,20],statement:[5,10],statu:[11,20,23],step:7,still:[12,21],stop:6,storag:[0,2,4,11,12],storage_class:[22,23],store:[1,3,5,7,9,11,12,13,15,16,20,21,22,23],str:[0,1,5,7,9,14,16,19],stream:22,strict:12,string:[0,1,2,3,4,6,7,8,9,10,11,14,15,16,19,20,21,22,23,24],string_valu:5,strong:6,stuff:23,sub:12,subclass:[7,11],subfield:3,submit:[4,23],subscrib:16,subscript:14,subscription_nam:17,subsequ:15,subsitut:12,sudo:13,suffici:12,suit:12,superflu:11,suppli:9,support:11,suppress:23,sure:[5,12],sync:15,tabl:[0,1,2],table_id:3,table_nam:4,table_typ:3,tabledata:3,take:[4,7,9,23],talk:11,target:16,techniqu:23,templat:[0,6,11,14,19,24],temporari:11,temporarili:23,temporaryredirect:11,test:[1,3,11,13,15,16,20],text:[5,7,11,22],text_valu:7,than:[4,11,12,22,23,24],thei:[4,11],them:[5,17],therefor:4,thi:[0,1,3,4,5,6,7,9,10,11,12,13,14,17,18,19,20,21,22,23,24],thin:6,thing:[9,10,12],those:[5,10,16,22],though:12,through:[9,12],time:[1,3,4,10,11,12,22],time_cr:23,time_delet:22,timedelta:[11,22],timeout:4,timeout_m:4,timestamp:[3,16,22,23],timestamp_messag:[14,16],titl:[1,3],to_json:12,to_protobuf:[6,8],togeth:21,token:[0,1,3,11],too:11,tool:[11,22,23],toomanyrequest:11,top:[4,6,24],topic:[14,15],topic_nam:[14,17],topmost:[5,10],total:3,total_row:3,track:5,transact:[5,6],transaction_id:6,transat:6,transport:11,tripl:6,troubl:13,truncat:4,tupl:[0,1,3,6,7,8,9,11,14,15,21],two:[3,5,10,12],txt:[11,13,23],type:[0,1,2,3,4,5,6,7,8,9,10,11,14,15,16,19,20,21,22,23,24],typeerror:11,typic:[6,11,23],tzinfo:4,ubuntu:13,unauthor:11,unavail:11,undelet:[18,20],under:[6,11,21],underli:22,understand:[6,11],unfortun:12,unicod:[5,7],uniqu:[3,20,21,22],unless:[8,11,12],unlik:18,unmarshal:6,until:[1,2,3,4,10,11,15,22],updat:[1,3,4,5,11,15,18,20,22],upload:22,upload_from_fil:22,upload_from_filenam:22,upload_from_str:[13,22],upon:[5,10],upsert:10,uri:[0,2,11,12,22,23],url:[0,1,3,6,11,14,15,16,19,20,22,23,24],use_json:11,use_query_cach:2,usequerycach:2,user:[1,3,11],user_ag:11,userbyemail:1,userinfo:[6,12],usual:6,utc:4,utf:[2,7,22],utf_8:2,util:20,uuid:4,v1beta1:[19,20],v1beta2:[6,14,15,16,20],val:6,valid:[22,23],valu:[0,1,3,4,5,6,7,9,11,14,16,19,21,22,24],value1:17,value2:17,valueerror:[1,3,5,6,8,9,10,11,16,22,23],variabl:[4,11,12,17],variou:18,verb:[11,22],veri:23,version:[0,6,11,14,19,22,23,24],versioning_en:23,via:[0,1,3,4,6,12,14,15,16,17,19,20,22,24],view:3,view_queri:3,visibl:19,visit:12,wai:12,want:[5,10,12,13,18,20,22,23],webserv:12,websit:23,well:[10,11,23],what:18,when:[0,4,5,6,7,10,11,12,14,20,21,22,23,24],whenev:[22,23],where:[3,6,9,14,19],whether:[20,21,22,23],which:[0,1,2,3,4,5,6,7,9,11,12,14,15,16,18,20,21,22,23,24],whole:23,whose:[3,7,8,24],wish:12,within:[3,4,10,22],without:[5,7,10,11,17,19],won:[10,11,21,22],work:[5,12,18,20,23],worker:12,would:[7,11,24],wouldn:6,wrapper:[6,11,22],writabl:4,write:[21,22],write_append:2,write_disposit:[2,4],write_empti:2,write_trunc:2,writeabl:4,writedisposit:2,writer:[1,4],written:2,www:[0,6,11,12,14,19,23,24],xact:10,you:[5,6,7,10,11,12,13,18,19,20,21,22,23,24],your:[4,6,11,12,13,17,18,20,23],zip:4},titles:["BigQuery Client","Datasets","Jobs","Tables","Using the API","Batches","Datastore Client","Entities","Keys","Queries","Transactions","Shared Core Modules","Authentication","Getting started","Pub/Sub Client","Subscriptions","Topics","Using the API","Resource Manager Overview","Client","Projects","ACL","Blobs / Objects","Buckets","Storage Client"],titleterms:{"export":4,account:12,acl:[4,21],advanc:12,api:[4,17],app:12,async:4,asynchron:4,authent:[12,18],author:[4,17],base:11,batch:5,bigqueri:0,blob:22,bucket:23,client:[0,6,11,12,14,19,24],cloud:13,comput:12,configur:[4,17],connect:[0,6,11,14,19,24],copi:4,core:11,credenti:[11,12],custom:12,data:4,dataset:[1,4],datastor:[6,13],discoveri:12,engin:12,entiti:7,environ:12,except:11,explicit:12,from:17,get:13,googl:12,helper:11,insert:4,job:[2,4],kei:8,leg:12,manag:[17,18],messag:17,modul:11,oauth:12,object:22,oper:4,overview:[12,18],preced:12,project:[4,17,20],provid:12,pub:14,publish:17,pull:17,queri:[4,9],refresh:12,resourc:18,servic:12,set:12,share:11,start:13,storag:[13,24],sub:14,subscript:[15,17],synchron:4,tabl:[3,4],token:12,topic:[16,17],transact:10,troubleshoot:12,user:12}})