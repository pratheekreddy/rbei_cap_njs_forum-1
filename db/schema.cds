namespace rbei.node.forum;

entity T_MD_USER {
	key EMAIL_ID				: String(256);
		IDNO					: String (20);
		NAME					: String(100);
		NTID					: String(20);
		DEPT					: String(30);
		USERNAME				: String(50);
		STATUS					: String(1);
		TYPE					: String(1);
		REGD_ON					: Timestamp;
		CHANGED_ON				: Timestamp;
		GEN_OTP					: Integer;
		GEN_OTP_TMSTMP			: Timestamp;
		GEN_RBEI_TOKEN			: String(400);
		GEN_RBEI_TOKEN_TMSTMP	: Timestamp;
};