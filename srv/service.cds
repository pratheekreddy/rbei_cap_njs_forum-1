using {rbei.node.forum as rbei} from '../db/schema';

service agenda @(requires : 'authenticated-user') {
    entity participants   as projection on rbei.T_MD_USER;
    entity sessions       as projection on rbei.Sessions;

    entity session_topics as projection on rbei.Session_Topics {
        * , SESSION : redirected to sessions
    };
}

service profile @(requires : 'authenticated-user') {

    @readonly
    entity readprofile(email : String(256)) as
        select from rbei.T_MD_USER {
            EMAIL_ID,
            IDNO,
            NAME,
            NTID,
            DEPT,
            USERNAME
        }
        where
            EMAIL_ID = : email;


    entity updateprofile @(Capabilities : {
        InsertRestrictions : {Insertable : false},
        UpdateRestrictions : {Updatable : true},
        DeleteRestrictions : {Deletable : false}
    })                                      as projection on rbei.T_MD_USER;
}

service userapproval  @(requires : 'authenticated-user'){
    @readonly
    entity user_list as
        select from rbei.T_MD_USER {
            EMAIL_ID,
            IDNO,
            NAME,
            NTID,
            DEPT,
            USERNAME,
            REGD_ON
        } where (STATUS is null or STATUS = '' or STATUS = 'R');
 
}
