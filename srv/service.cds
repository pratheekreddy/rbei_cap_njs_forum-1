using {rbei.node.forum as rbei} from '../db/schema';

service agenda {
	entity participants as projection on rbei.T_MD_USER;
}