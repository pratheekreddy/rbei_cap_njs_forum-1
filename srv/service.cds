using {rbei.node.forum as rbei} from '../db/schema';

service agenda @(requires : 'authenticated-user') {
    entity participants   as projection on rbei.T_MD_USER;
    entity sessions       as projection on rbei.Sessions;

    entity session_topics as projection on rbei.Session_Topics {
        * , SESSION : redirected to sessions
    };
}

service profile {

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

    entity updateprofile @(capabilities : {
        InsertRestrictions : {Insertable : false},
        UpdateRestrictions : {Updatable : true},
        DeleteRestrictions : {Deletable : false},
        ReadRestrictions   : {Readable : false}
    })                                      as select from rbei.T_MD_USER;
}

service admin {
    entity users as select FROM rbei.T_MD_USER {EMAIL_ID,NAME,DEPT,IDNO,NTID,REGD_ON,USERNAME} where STATUS !='A';
}