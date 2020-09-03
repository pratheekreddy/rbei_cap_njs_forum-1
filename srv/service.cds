using {rbei.node.forum as rbei} from '../db/schema';

service agenda {
	entity participants as projection on rbei.T_MD_USER;
	entity sessions as projection on rbei.Sessions;
	entity session_topics as projection on rbei.Session_Topics {*, SESSION : redirected to sessions};
}