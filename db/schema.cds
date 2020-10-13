namespace rbei.node.forum;

entity T_MD_USER {
    key EMAIL_ID              : String(256);
        IDNO                  : String(20);
        NAME                  : String(100);
        NTID                  : String(20);
        DEPT                  : String(30);
        USERNAME              : String(50);
        STATUS                : String(1);
        TYPE                  : String(1);
        REGD_ON               : Timestamp;
        CHANGED_ON            : Timestamp;
        GEN_OTP               : Integer;
        GEN_OTP_TMSTMP        : Timestamp;
        GEN_RBEI_TOKEN        : String(400);
        GEN_RBEI_TOKEN_TMSTMP : Timestamp;
};

entity Sessions {
    key ID           : String(150);
        DATE         : Date;
        TITLE        : String(150);
        DESC         : String(500);
        TOPICS       : Composition of many Session_Topics
                           on TOPICS.SESSION = $self;
        S_CREATED_BY : String(150);
        S_CREATED_ON : Timestamp;
        NOTIF_STATUS : String(1);
        FILES        : Composition of many Session_Files
                           on FILES.SESSION = $self;
        URL          : String(300);
        RATING       : Composition of many T_SESSION_FEEDBACK
                           on RATING.SESSION = $self;
}

entity Session_Topics {
    key SESSION      : Association to Sessions;
    key SUB_TOPIC_ID : String(50);
        USER_EMAIL   : String(256);
        SUB_TOPIC    : String(100);
// FILE_01				:	String(200);
// FILE_02				:	String(200);
// FILE_03				:	String(200);
}

entity Session_Files {
    key SESSION     : Association to Sessions;
    key FILE_NAME   : String(200);
        UPLOADED_BY : String(100);
}

entity T_SESSION_FEEDBACK {
    key SESSION    : Association to Sessions;
    key EMAIL      : String(256);
        RATING     : Integer;
        FEEDBACK : String(1000);
        CREATEDAT  : Timestamp @cds.on.insert : $now;
        MODIFIEDAT : Timestamp @cds.on.update : $now;

}

entity T_APPLICATION_FEEDBACK {
    key EMAIL      : String(256);
        FEEDBACK   : String(500);
        CREATEDAT  : Timestamp @cds.on.insert : $now;
        MODIFIEDAT : Timestamp @cds.on.update : $now;
}
