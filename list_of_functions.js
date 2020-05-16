///////////////
/**function(){
            //$ перенос строки
            var text="lorem ipsum$some"
            for (let index = 0; index < text.length; index++) {
                setTimeout(some,index*500)
                function some(){
                    if(text[index]!="$"){
                        plase.innerHTML+=text[index]
                    }else{
                        plase.innerHTML+="<br>"
                    }
                    

                }
                
                
            }
        } */
var main_masty_array = new Array("trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki");
var main_power_array = new Array(2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14);

var main_dificult="none"

var time_battle=60;

var index_bot_1;

var kombination_power_counter_p=0;
var last_komb="undefined"
var automaticli_enter=true
var card_in_hand_1 = {
    masty:"chervi1",
    power:10
}
var card_in_hand_2 = {
    masty:"chervi1",
    power:11
}
var card_in_hand_3 = {
    masty:"chervi3",
    power:12
}
var card_in_hand_4 = {
    masty:"chervi4",
    power:13
}
var card_in_hand_5 = {
    masty:"chervi5",
    power:14
}
//--
var stavka_amount=0
//
var fleshroyal_counter=0;
var stritflesh_counter=0;
var kare_counter=      0;
var ful_counter=       0;
var flesh_counter=     0;
var strit_counter=     0;
var troyka_counter=    0;
var twopary_counter=   0;
var para_counter=      0;
var starshaya_counter= 0;
//--
//--

//--
//--
var numer_to_give_cards=0;
var replacement_cards= new Array();
var cards_act="none"
var player_money=10000;
var player_name="admin_"
var players_kol=1;
var kol_sbros=0;
var kol_coloda=main_power_array.length;
//
//

//
var main_masty_array= new Array("trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki","trefi","bubni","chervi","piki");
var main_power_array= new Array(2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14);
//--
var time_speed_for_time_main=1000
////////////////modern_alert("strong_text","normal_text","type")|
//plavn_text("ERROR$ERROR$ERROR$ERROR$ERROR$ERROR$ERROR$","error_table",100)
function check_comand(text){
    if(text=="$INFO"){
        send_text("Sistem",'<br><span id="error_link" style="color:red;">$ERROR</span> : Включает визуализацию ошибки кода<br><span id="matrix_link" style="color:green;">$MATRIX</span> : Прячет все компоненты и включает падающие строки')
        error_link.onclick=function(){chat_main_input.value="$ERROR"}
        matrix_link.onclick=function(){chat_main_input.value="$MATRIX"}
    }
    if(text=="$ERROR"){
        console.log("work")
plavn_text("struct group_info init_groups = { .usage = ATOMIC_INIT(2) };$$struct group_info *groups_alloc(int gidsetsize){$$	struct group_info *group_info;$$	int nblocks;$$	int i;$$$$	nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;$$	/* Make sure we always allocate at least one indirect block pointer */$$	nblocks = nblocks ? : 1;$$	group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);$$	if (!group_info)$$		return NULL;$$	group_info->ngroups = gidsetsize;$$	group_info->nblocks = nblocks;$$	atomic_set(&group_info->usage, 1);$$$$	if (gidsetsize <= NGROUPS_SMALL)$$		group_info->blocks[0] = group_info->small_block;$$	else {$$		for (i = 0; i < nblocks; i++) {$$			gid_t *b;$$			b = (void *)__get_free_page(GFP_USER);$$			if (!b)$$				goto out_undo_partial_alloc;$$			group_info->blocks[i] = b;$$		}$$	}$$	return group_info;$$$$out_undo_partial_alloc:$$	while (--i >= 0) {$$		free_page((unsigned long)group_info->blocks[i]);$$	}$$	kfree(group_info);$$	return NULL;$$}$$$$EXPORT_SYMBOL(groups_alloc);$$$$void groups_free(struct group_info *group_info)$${$$	if (group_info->blocks[0] != group_info->small_block) {$$		int i;$$		for (i = 0; i < group_info->nblocks; i++)$$			free_page((unsigned long)group_info->blocks[i]);$$	}$$	kfree(group_info);$$}$$$$EXPORT_SYMBOL(groups_free);$$$$/* export the group_info to a user-space array */$$static int groups_to_user(gid_t __user *grouplist,$$			  const struct group_info *group_info)$${$$	int i;$$	unsigned int count = group_info->ngroups;$$$$	for (i = 0; i < group_info->nblocks; i++) {$$		unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);$$		unsigned int len = cp_count * sizeof(*grouplist);$$$$		if (copy_to_user(grouplist, group_info->blocks[i], len))$$			return -EFAULT;$$$$		grouplist += NGROUPS_PER_BLOCK;$$		count -= cp_count;$$	}$$	return 0;$$}$$$$/* fill a group_info from a user-space array - it must be allocated already */$$static int groups_from_user(struct group_info *group_info,$$    gid_t __user *grouplist)$${$$	int i;$$	unsigned int count = group_info->ngroups;$$$$	for (i = 0; i < group_info->nblocks; i++) {$$		unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);$$		unsigned int len = cp_count * sizeof(*grouplist);$$$$		if (copy_from_user(group_info->blocks[i], grouplist, len))$$			return -EFAULT;$$$$		grouplist += NGROUPS_PER_BLOCK;$$		count -= cp_count;$$	}$$	return 0;$$}$$$$/* a simple Shell sort */$$static void groups_sort(struct group_info *group_info)$${$$	int base, max, stride;$$	int gidsetsize = group_info->ngroups;$$$$	for (stride = 1; stride < gidsetsize; stride = 3 * stride + 1)$$		; /* nothing */$$	stride /= 3;$$$$	while (stride) {$$		max = gidsetsize - stride;$$		for (base = 0; base < max; base++) {$$			int left = base;$$			int right = left + stride;$$			gid_t tmp = GROUP_AT(group_info, right);$$$$			while (left >= 0 && GROUP_AT(group_info, left) > tmp) {$$				GROUP_AT(group_info, right) =$$				    GROUP_AT(group_info, left);$$				right = left;$$				left -= stride;$$			}$$			GROUP_AT(group_info, right) = tmp;$$		}$$		stride /= 3;$$	}$$}$$$$/* a simple bsearch */$$int groups_search(const struct group_info *gro|","error_table",10)
    }else if(text=="$MATRIX"){
        game_main.style.display="none"
        matrix_canvas.style.display="block"
        matrix_1()
    }
}
function send_text(name,text){
    mail=document.createElement("p");
    mail.innerHTML=name+": "+text
    mail.style.marginBottom="2vh"
    text_plase_chat.appendChild(mail)
    

}
function matrix_1(){

    
    const C = document.querySelector("canvas"),
        $ = C.getContext("2d"),
        W = (C.width = window.innerWidth),
        H = (C.height = window.innerHeight);
      
      const str = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я",
        matrix = str.split("");
      
      let font = 11,
        col = W / font,
        arr = [];
      
      for (let i = 0; i < col; i++) arr[i] = 1;
      
      function draw() {
        $.fillStyle = "rgba(0,0,0,.05)";
        $.fillRect(0, 0, W, H);
        $.fillStyle = "#0f0";
        $.font = font + "px system-ui";
        for (let i = 0; i < arr.length; i++) {
          let txt = matrix[Math.floor(Math.random() * matrix.length)];
          $.fillText(txt, i * font, arr[i] * font);
          if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
          arr[i]++;
        }
      }
      
    
      setInterval(draw, 123);
      window.addEventListener("resize", () => location.reload());
    }
function plavn_text(text,place,speed){
    
    var plase=document.getElementById(place)
    plase.style.zIndex=99999999999999999;
    //$ перенос строки
    for (let index = 0; index < text.length; index++) {
        setTimeout(some,index*speed)
        function some(){
            if(text[index]!="$"){
                plase.innerHTML+=text[index]
            }else{
                plase.innerHTML+="<br>"
            }
            

        }
        
        
    }
}
function winer_last_komb_func_1(){
    var last_komb_power=0
    switch (last_komb) {
        case "Старшая карта":
            last_komb_power=10
            break;
        case "Пара":
            last_komb_power=20
            break;
        case "2 пары":
            last_komb_power=30
            break;
        case "Тройка":
            last_komb_power=40
            break;
        case "Стрит":
            last_komb_power=50
            break;
        case "Флеш":
            last_komb_power=60
            break;
        case "Фулл хаус":
            last_komb_power=70
            break;
        case "Карэ":
            last_komb_power=80
            break;
        case "Стрит флеш":
            last_komb_power=90
            break;
        case "Флеш рояль":
            last_komb_power=100
            break;
                                                                                                                                                                                        
        default:
            alert("ERROR")
            //ERRORFUNC
            break;
        }
    
        switch (bot_1.last_komb) {
            case "Старшая карта":
                bot_1_last_komb_power=10
                break;
            case "Пара":
                bot_1_last_komb_power=20
                break;
            case "2 пары":
                bot_1_last_komb_power=30
                break;
            case "Тройка":
                bot_1_last_komb_power=40
                break;
            case "Стрит":
                bot_1_last_komb_power=50
                break;
            case "Флеш":
                bot_1_last_komb_power=60
                break;
            case "Фулл хаус":
                bot_1_last_komb_power=70
                break;
            case "Карэ":
                bot_1_last_komb_power=80
                break;
            case "Стрит флеш":
                bot_1_last_komb_power=90
                break;
            case "Флеш рояль":
                bot_1_last_komb_power=100
                break;
                                                                                                                                                                                            
            default:
                alert("ERROR")
                //ERRORFUNC
                break;
            }
            if(bot_1_last_komb_power>last_komb_power){
                last_komb_winer_name.innerHTML=bot_1.name
             }else if(bot_1_last_komb_power<last_komb_power){
                last_komb_winer_name.innerHTML=player_name
             }else if(bot_1_last_komb_power==last_komb_power){
                last_komb_winer_name.innerHTML="Ничья"
             }
}
function player_last_komb_func_1(){
    switch (last_komb) {
    case "Старшая карта":
        last_komb_sravn_player.innerHTML="Старшая карта";
        break;
    case "Пара":
        last_komb_sravn_player.innerHTML="Пара";
        break;
    case "2 пары":
        last_komb_sravn_player.innerHTML="2 пары";
        break;
    case "Тройка":
        last_komb_sravn_player.innerHTML="Тройка";
        break;
    case "Флеш":
        last_komb_sravn_player.innerHTML="Флеш";
        break;
    case "Фулл хаус":
        last_komb_sravn_player.innerHTML="Фулл хаус";
        break;
    case "Карэ":
        last_komb_sravn_player.innerHTML="Карэ";
        break;
    case "Стрит флеш":
        last_komb_sravn_player.innerHTML="Стрит флеш";
        break;
    case "Флеш рояль":
        last_komb_sravn_player.innerHTML="Флеш рояль";
        break;
    case "Стрит":
        last_komb_sravn_player.innerHTML="Стрит";
        break;
                                                                                                                                                                                    
    default:
        alert("ERROR")
        //ERRORFUNC
        break;
    }
}
function modern_alert(strong_text,normal_text,type){
    text_modern_alert.innerHTML="<strong>"+strong_text+"</strong> "+normal_text
    modern_alert_1.style.display="flex"
    modern_alert_1.classname="alert alert-danger alert-dismissible fade show"
}
function are_user_use_mobile(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      mobile=true;
    } else {
      mobile=false;
    }
    return mobile;
  }
function get_list_of_best(){
    /*console.log("start:\n")
    for(let index = 0; index < best_score.length; index++){
        console.log(best_names[index]+": "+best_score[index])
    }*/
    best_score[best_score.length-1]=number_komb_all.textContent-0
    for (let index_1 = 0; index_1 < best_score.length; index_1++) {
        for (let index = 0; index < best_score.length; index++) {
            if(best_score[index]<best_score[index+1]){
                var res_score=best_score[index+1]
                var res_name =best_names[index+1]
                best_score[index+1]=best_score[index]
                best_names[index+1]=best_names[index]
                best_score[index]=res_score;
                best_names[index]=res_name ;
                
                
            }
            
        }
    }
    var title_text=""
    for (let index_2 = 0; index_2 < best_score.length; index_2++) {
        title_text+=best_names[index_2]+": "+best_score[index_2]+"\n"
        console.log(best_names[index_2]+": "+best_score[index_2]+"\n")
    }
    console.log(title_text)
    if(are_user_use_mobile()==false){number_komb_all.title=title_text}
    else{
        number_komb_all.onclick=function(){
            alert(title_text)
        }
    }
    
    /*console.log("result:\n")
    for(let index = 0; index < best_score.length; index++){
        console.log(best_names[index]+": "+best_score[index])
    }*/
}
function give_cards_main(){
    if(numer_to_give_cards<50){
    cards_act="give"
    var masty_array=new Array("trefi","bubni","chervi","piki");
    card_in_hand_1.masty=main_masty_array[numer_to_give_cards+0];
    card_in_hand_2.masty=main_masty_array[numer_to_give_cards+1];
    card_in_hand_3.masty=main_masty_array[numer_to_give_cards+2];
    card_in_hand_4.masty=main_masty_array[numer_to_give_cards+3];
    card_in_hand_5.masty=main_masty_array[numer_to_give_cards+4];
    //
    card_in_hand_1.power=main_power_array[numer_to_give_cards+0];
    card_in_hand_2.power=main_power_array[numer_to_give_cards+1];
    card_in_hand_3.power=main_power_array[numer_to_give_cards+2];
    card_in_hand_4.power=main_power_array[numer_to_give_cards+3];
    card_in_hand_5.power=main_power_array[numer_to_give_cards+4];
    //
    in_card_v1("playing_card_main_1",card_in_hand_1.masty,card_in_hand_1.power)
    in_card_v1("playing_card_main_2",card_in_hand_2.masty,card_in_hand_2.power)
    in_card_v1("playing_card_main_3",card_in_hand_3.masty,card_in_hand_3.power)
    in_card_v1("playing_card_main_4",card_in_hand_4.masty,card_in_hand_4.power)
    in_card_v1("playing_card_main_5",card_in_hand_5.masty,card_in_hand_5.power)
    //
    kombo_div_main.display="none"
    kombo_div_main.innerHTML=""
    cards_act="replacement"
    change_kards.style.display="flex"
    //--
    button_main_6.style.display="block"
    button_main_5.style.display="none"
    //--
    //alert('Выберите карты которые вы хотите поменять нажатием, а затем нажмите кнопку "Поменять карты".\nЕсли вы не хотите менять карты просто нажмите на кнопкy "Поменять карты".\nОтменить выброр карты можно нажав на карту повторно!')
    //--
    numer_to_give_cards+=5;
    kol_coloda-=5;
}else(alert("Карт в колоде не хватает"))
}
function change_main(){
    numer_to_give_cards+=replacement_cards.length
    kol_sbros+=replacement_cards.length
           
    for (let index = 0; index < replacement_cards.length; index++) {
    var masty_array=new Array("trefi","bubni","chervi","piki");
        if(replacement_cards[index]=="playing_card_main_1"){
            card_in_hand_1.masty=main_masty_array[numer_to_give_cards+0];
            card_in_hand_1.power=main_power_array[numer_to_give_cards+0];
            in_card_v1("playing_card_main_1",card_in_hand_1.masty,card_in_hand_1.power)
        }else if(replacement_cards[index]=="playing_card_main_2"){
            card_in_hand_2.masty=main_masty_array[numer_to_give_cards+1];
            card_in_hand_2.power=main_power_array[numer_to_give_cards+1];
            in_card_v1("playing_card_main_2",card_in_hand_2.masty,card_in_hand_2.power)
        }else if(replacement_cards[index]=="playing_card_main_3"){
            card_in_hand_3.masty=main_masty_array[numer_to_give_cards+2];
            card_in_hand_3.power=main_power_array[numer_to_give_cards+2];
            in_card_v1("playing_card_main_3",card_in_hand_3.masty,card_in_hand_3.power)
        }else if(replacement_cards[index]=="playing_card_main_4"){
            card_in_hand_4.masty=main_masty_array[numer_to_give_cards+3];
            card_in_hand_4.power=main_power_array[numer_to_give_cards+3];
            in_card_v1("playing_card_main_4",card_in_hand_4.masty,card_in_hand_4.power)
        }else if(replacement_cards[index]=="playing_card_main_5"){
            card_in_hand_5.masty=main_masty_array[numer_to_give_cards+4];
            card_in_hand_5.power=main_power_array[numer_to_give_cards+4];
            in_card_v1("playing_card_main_5",card_in_hand_5.masty,card_in_hand_5.power)
        }
        
    }
    numer_to_give_cards+=replacement_cards.length
    playing_card_main_1.style.opacity="1"
    playing_card_main_2.style.opacity="1"
    playing_card_main_3.style.opacity="1"
    playing_card_main_4.style.opacity="1"
    playing_card_main_5.style.opacity="1"
    replacement_cards = []
    cards_act="lay_out"
    //--
    button_main_1.style.display="block"
    button_main_6.style.display="none"
    //--
}


function lay_out_main(){
    if(cards_act=="lay_out"){
        kombination_power_counter_p=lay_out_cards(kombination_power_counter_p,card_in_hand_1.masty,card_in_hand_2.masty,card_in_hand_3.masty,card_in_hand_4.masty,card_in_hand_5.masty,card_in_hand_1.power,card_in_hand_2.power,card_in_hand_3.power,card_in_hand_4.power,card_in_hand_5.power,"kombo_div_main")
        kombo_div_main.style.display="block"
        change_kards.style.display="none"
        all_to_zero_2()
        //--
        button_main_5.style.display="block"
        button_main_1.style.display="none"
        kol_sbros+=5
        var index_p_1=best_names.indexOf(player_name);
        best_score[index_p_1]=kombination_power_counter_p;
    }
}


function all_to_zero_2(){
    card_in_hand_1.masty=undefined;
    card_in_hand_1.power=undefined;
    card_in_hand_2.masty=undefined;
    card_in_hand_2.power=undefined;
    card_in_hand_3.masty=undefined;
    card_in_hand_3.power=undefined;
    card_in_hand_4.masty=undefined;
    card_in_hand_4.power=undefined;
    card_in_hand_5.masty=undefined;
    card_in_hand_5.power=undefined;
    //--
    in_card_v1("playing_card_main_1",card_in_hand_1.masty,card_in_hand_1.power)
    in_card_v1("playing_card_main_2",card_in_hand_2.masty,card_in_hand_2.power)
    in_card_v1("playing_card_main_3",card_in_hand_3.masty,card_in_hand_3.power)
    in_card_v1("playing_card_main_4",card_in_hand_4.masty,card_in_hand_4.power)
    in_card_v1("playing_card_main_5",card_in_hand_5.masty,card_in_hand_5.power)
}

function change(first_number,second_number){
    first_number--;
    second_number--;
    var number_of_cards =new Array(card_in_hand_1,card_in_hand_2,card_in_hand_3,card_in_hand_4,card_in_hand_5);
    var number_of_cards_divs =new Array("playing_card_main_1","playing_card_main_2","playing_card_main_3","playing_card_main_4","playing_card_main_5");
    var card_promejutok_masty=number_of_cards[first_number].masty;
    var card_promejutok_power=number_of_cards[first_number].power;
    number_of_cards[first_number].masty=number_of_cards[second_number].masty;
    number_of_cards[first_number].power=number_of_cards[second_number].power;
    number_of_cards[second_number].masty=card_promejutok_masty;
    number_of_cards[second_number].power=card_promejutok_power;
    //---
    in_card_v1(number_of_cards_divs[first_number] ,number_of_cards[first_number].masty,number_of_cards[first_number].power)
    in_card_v1(number_of_cards_divs[second_number],number_of_cards[second_number].masty,number_of_cards[second_number].power)
}
function auto_enter(){
    if(automaticli_enter==true){
        //time_battle_interval()
        player_name="unknown";
        game_main.style.display="block"
        game.style.display="block"
        start.style.display="none"
        player_name_div.innerHTML=player_name
        main_dificult="normal"
        info_bot_1_main.style.backgroundColor=bot_1_color.value
    }
    
}
function onload_function_1(){
    sravn_score_adapt_1()
    check_stavka_input()
    shuffle_koloda_v1(main_masty_array,main_power_array)
    player_money_div_1.innerHTML=player_money
    player_name_div.innerHTML=player_name
}
function sravn_score_adapt_1(){
    names_last_komb_sravn_bot_1.style.backgroundColor=bot_1_color.value
    score_sravn_bot_1.style.backgroundColor=bot_1_color.value
    names_sravn_bot_1.style.backgroundColor=bot_1_color.value
    names_last_komb_sravn_player.style.backgroundColor="#155724"
    names_last_komb_sravn_player.style.backgroundColor="#155724"
    score_sravn_player.style.backgroundColor="#155724"
    names_last_komb_sravn_bot_1.innerHTML=bot_1.name
    names_sravn_bot_1.innerHTML=bot_1.name
    names_sravn_player.innerHTML=player_name
    names_last_komb_sravn_player.innerHTML=player_name
    score_sravn_bot_1.innerHTML=bot_1.komb_amount
    score_sravn_player.innerHTML=kombination_power_counter_p
    info_bot_1_main.style.backgroundColor=bot_1_color.value
}
function say_next_cards(how_much){
    var otchet=""
    for (let index = numer_to_give_cards; index < how_much+numer_to_give_cards; index++) {
        var masty_1="no"
        var power_1=main_power_array[index]
        //
        if( main_masty_array[index]=="trefi" ){masty_1="трефы"}
        else if( main_masty_array[index]=="bubni" ){masty_1="бубны"}
        else if( main_masty_array[index]=="piki" ){masty_1="пики"}
        else if( main_masty_array[index]=="chervi" ){masty_1="черви"}
        //
        if( main_power_array[index]==11 )    {power_1="Валет"}
        else if( main_power_array[index]==12){power_1="Дама"}
        else if( main_power_array[index]==13){power_1="Король"}
        else if( main_power_array[index]==14){power_1="Туз"}
        //
        var text_line="\n"+(index+1-numer_to_give_cards)+": "+power_1+" "+masty_1
        otchet+=text_line;
    }
    console.log(otchet)
}/*
function give_card(power,masty,number_in_hand){
    var number_to_replase_main=0;
    for (let index = 0; index < 51; index++) {
        if(main_power_array[index]==power && main_masty_array[index]==masty){
            //
            if( main_masty_array[index]=="trefi" ){masty_1="трефы"}
            else if( main_masty_array[index]=="bubni" ){masty_1="бубны"}
            else if( main_masty_array[index]=="piki" ){masty_1="пики"}
            else if( main_masty_array[index]=="chervi" ){masty_1="черви"}
            //
            if( main_power_array[index]==11 )    {power_1="Валет"}
            else if( main_power_array[index]==12){power_1="Дама"}
            else if( main_power_array[index]==13){power_1="Король"}
            else if( main_power_array[index]==14){power_1="Туз"}
            //
            console.log("Карта найдена: "+power_1+" "+masty_1)
            //
            number_to_replase_main=index;
        }
    }
    var card_promejutok_masty=number_of_cards[first_number].masty;
    var card_promejutok_power=main_power_array[first_number].power;
    number_of_cards[first_number].masty=number_of_cards[second_number].masty;
    main_power_array[first_number].power=main_power_array[second_number].power;
    number_of_cards[second_number].masty=card_promejutok_masty;
    main_power_array[second_number].power=card_promejutok_power;
}*/
function time_func_main_1(){
    time_func_main()
    
}
function time_func_main(){
    time_1=setTimeout(give_cards_main,5000)
    //g=setInterval(timer_v1_func(n,"time_div_main"))
    time_div_main.style.display="block"
    time_value=5
    for (var index = 0; index < time_value+1; index++) {        
        var text_1=""
        if(index<10){text_1="0"+(time_value-index)}else{text_1=""+(time_value-index)}
        text_1="00:"+text_1
        x_1=setTimeout(inner,(index*1000),text_1,"time_div_main")
        if(index==time_value){
            undisplay_1()
        }
    }
    //time_div_main.style.display="none"
    
    //поменять
    function undisplay_1(){
        time_div_main.style.display="none"
    }
    function display_some(value,plase){
        place=document.getElementById(plase);
        place.style.display=value
    }
    function inner(text_to_inner,plase){
        place=document.getElementById(plase);
        place.innerHTML=text_to_inner
    }
}
function timer_v1_func(col,plase){
    place=document.getElementById(plase)

}
function give(kombo_name){
    var masty_array=new Array("trefi","bubni","chervi","piki");
    
    if(kombo_name=="Флеш рояль"){
        card_in_hand_1.masty=masty_array[getRandomInt(0,4)];
        card_in_hand_2.masty=card_in_hand_1.masty
        card_in_hand_3.masty=card_in_hand_1.masty
        card_in_hand_4.masty=card_in_hand_1.masty
        card_in_hand_5.masty=card_in_hand_1.masty
        //*--
        card_in_hand_1.power=10;
        card_in_hand_2.power=11;
        card_in_hand_3.power=12;
        card_in_hand_4.power=13;
        card_in_hand_5.power=14;
        //--
    }
    in_card_v1("playing_card_main_1",card_in_hand_1.masty,card_in_hand_1.power)
    in_card_v1("playing_card_main_2",card_in_hand_2.masty,card_in_hand_2.power)
    in_card_v1("playing_card_main_3",card_in_hand_3.masty,card_in_hand_3.power)
    in_card_v1("playing_card_main_4",card_in_hand_4.masty,card_in_hand_4.power)
    in_card_v1("playing_card_main_5",card_in_hand_5.masty,card_in_hand_5.power)
}
//for test| lay_out_cards("tus","tus","tus","tus","1","chervi","chervi","chervi","chervi","chervi","10","11","12","13","14")
function lay_out_cards(kombination_power_counter_p,card_in_hand_1_masty,card_in_hand_2_masty,card_in_hand_3_masty,card_in_hand_4_masty,card_in_hand_5_masty,card_in_hand_1_power,card_in_hand_2_power,card_in_hand_3_power,card_in_hand_4_power,card_in_hand_5_power,place){
    /*************************************/
    var fleshroyal_count=100;
    var stritflesh_count=90;
    var kare_count=      80;
    var ful_count=       70;
    var flesh_count=     60;
    var strit_count=     50;
    var troyka_count=    40;
    var twopary_count=   30;
    var para_count=      20;
    var starshaya_count= 10;

    plase=document.getElementById(place);
    //(((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty))&&((card_in_hand_1_power==10)&&(card_in_hand_2_power==11)&&(card_in_hand_3_power==12)&&(card_in_hand_4_power==13)&&(card_in_hand_5_power==14))) |флеш рояль
    if(((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty))&&((card_in_hand_1_power+card_in_hand_2_power+card_in_hand_3_power+card_in_hand_4_power+card_in_hand_5_power)==60)){
        plase.innerHTML="Флеш рояль"
        kombination_power_counter_p+=fleshroyal_count;
        fleshroyal_counter++;
    }else if((((card_in_hand_1_power==card_in_hand_2_power-1)&&(card_in_hand_2_power==card_in_hand_3_power-1)&&(card_in_hand_3_power==card_in_hand_4_power-1)&&(card_in_hand_4_power==card_in_hand_5_power-1))&&((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)))){
        plase.innerHTML="Стрит флеш"
        kombination_power_counter_p+=stritflesh_count;
        stritflesh_counter++
    }else if(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))){
        plase.innerHTML="Карэ"
        kombination_power_counter_p+=kare_count;
        kare_counter++
    }else if((((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power))&&(card_in_hand_4_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power))&&(card_in_hand_3_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_5_power))&&(card_in_hand_3_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_2_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_3_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_2_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_3_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_4_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_1_power==card_in_hand_5_power))){
        plase.innerHTML="Фулл хаус"
        kombination_power_counter_p+=ful_count;
        ful_counter++
    }else if((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)){
        plase.innerHTML="Флеш"
        kombination_power_counter_p+=flesh_count;
        flesh_counter++
    }else if ((card_in_hand_1_power==card_in_hand_2_power-1)&&(card_in_hand_2_power==card_in_hand_3_power-1)&&(card_in_hand_3_power=card_in_hand_4_power-1)&&(card_in_hand_4_power==card_in_hand_5_power-1)) {
        plase.innerHTML="Стрит"
        kombination_power_counter_p+=strit_count;
        strit_counter++
    }else if((card_in_hand_3_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_3_power)){
        plase.innerHTML="Тройка"
        kombination_power_counter_p+=troyka_count;
        troyka_counter++
    }else if(( card_in_hand_3_power==card_in_hand_4_power && card_in_hand_2_power==card_in_hand_5_power)^( card_in_hand_3_power==card_in_hand_5_power && card_in_hand_2_power==card_in_hand_4_power)^( card_in_hand_2_power==card_in_hand_3_power && card_in_hand_4_power==card_in_hand_5_power)^( card_in_hand_1_power==card_in_hand_5_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_4_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_5_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_3_power && (card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_2_power && (card_in_hand_3_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))){
        plase.innerHTML="2 пары"
        kombination_power_counter_p+=twopary_count;
        twopary_counter++
    }else if(((((((((card_in_hand_1_power==card_in_hand_2_power^card_in_hand_1_power==card_in_hand_3_power)^card_in_hand_1_power==card_in_hand_4_power)^card_in_hand_1_power==card_in_hand_5_power)^card_in_hand_2_power==card_in_hand_3_power)^card_in_hand_2_power==card_in_hand_4_power)^card_in_hand_2_power==card_in_hand_5_power)^card_in_hand_3_power==card_in_hand_4_power)^card_in_hand_3_power==card_in_hand_5_power)^card_in_hand_4_power==card_in_hand_5_power){
        plase.innerHTML="Пара"
        kombination_power_counter_p+=para_count;
        para_counter++
    }else {
        kombination_power_counter_p+=starshaya_count;
        starshaya_counter++
        plase.innerHTML="Старшая карта"
    }

    score_div.innerHTML=kombination_power_counter_p
    number_komb_all.innerHTML=kombination_power_counter_p
    last_komb=plase.textContent

    
    //--
    number_komb_1.innerHTML=fleshroyal_counter
    number_komb_2.innerHTML=stritflesh_counter
    number_komb_3.innerHTML=kare_counter
    number_komb_4.innerHTML=ful_counter
    number_komb_5.innerHTML=flesh_counter
    number_komb_6.innerHTML=strit_counter
    number_komb_7.innerHTML=troyka_counter
    number_komb_8.innerHTML=twopary_counter
    number_komb_9.innerHTML=para_counter
    number_komb_10.innerHTML=starshaya_counter
    return kombination_power_counter_p;
}
function copy_text(copy_text) {
    div_for_ctrlc.value=copy_text
    /* Get the text field */
    var copyText = document.getElementById("div_for_ctrlc");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
  function stavka_operation_1(win){
      //&#9660;черный треугольник вниз
      //&#9650;черный треугольник вверх
      if(stavka_amount!=0){
      if(win==true){
        player_money+=(2*stavka_amount);
        player_money_div_1.innerHTML=('&#9650;'+player_money);
      }else{
        player_money-=(1*stavka_amount);
        player_money_div_1.innerHTML=('&#9660;'+player_money);
      }
    }
      stavka_main_div.innerHTML="none";
      stavka_div.style.display="none"
          stavka_input.value=""
          stavka_amount=0
  }
function time_battle_interval(){
    var time_sec_variable=0

    
        time_value=time_battle//врямя боя в секундах
        end_of_time=setTimeout(time_ends_func,time_value*time_speed_for_time_main)
        
        for (var index = 0; index<time_value; index++) {        
            time_sec_variable++
            var sec_battle=time_sec_variable%60;
            var min_battle= Number.parseInt(time_sec_variable/60)
            if(sec_battle<10){sec_battle="0"+sec_battle}
            if(min_battle<10){min_battle="0"+min_battle}
            var text_1=min_battle+":"+sec_battle;
            x_1=setTimeout(inner,(index*time_speed_for_time_main),text_1,"battle_time_div")
            x_2=setTimeout(func_1,(index*time_speed_for_time_main),index)
            
            
        }
        function func_1(index){
            
            var cl_red=index/time_value
            var cl_green=1-cl_red
            cl_red*=255
            cl_green*=255
            //console.log("red: "+cl_red+"\ngreen: "+cl_green+"\nindex: "+index+"\ntime_value: "+time_value)
            battle_time_div.style.color="rgb("+cl_red+","+cl_green+",0)"
        }
        //time_div_main.style.display="none"
        
        //поменять
        function undisplay_1(){
            time_div_main.style.display="none"
        }
        function display_some(value,plase){
            place=document.getElementById(plase);
            place.style.display=value
        }
        function inner(text_to_inner,plase){
            place=document.getElementById(plase);
            place.innerHTML=text_to_inner
        }
    
}
function check_stavka_input(){
    check_stavka_input_interval=setInterval(stavka_interval,1)
    function stavka_interval(){
        if(stavka_input.value>player_money){button_stavka_input_div.style.display="none";button_stavka_input_div_inc.style.display="block";}
        else{button_stavka_input_div.style.display="block";button_stavka_input_div_inc.style.display="none";}
        
    }
}
function write_leters(word,place_k){
    place=document.getElementById(place_k)
    for (var index = 0; index < word.length; index++) {
        place.innerHTML+=word[index]
        r=setInterval(erere,1000)
    }
    function erere(){
        r=clearInterval()
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function shuffle_koloda_v1(main_masty_array,main_power_array){
    var time= new Date();
    const timer_3 = time.getMilliseconds();
    console.log("Начинаю перемешивать колоду")

    var time_counter=0;
    
    for (let index_1 = 0; index_1 < 2; index_1++) {
        for (let index = 0; index < 51; index++) {
        var power_prom=undefined;
        var masty_prom=undefined;
        var number_to_replase=getRandomInt(0,51);
        while (number_to_replase==index) {
            var number_to_replase=getRandomInt(0,51);
        }
        //console.log("number_to_replase="+number_to_replase+"\nindex="+index+"\n*number_to_replase не равно index")
        //--меняем 2 карты местами в мастях
        masty_prom=main_masty_array[index];
        main_masty_array[index]=main_masty_array[number_to_replase];
        main_masty_array[number_to_replase]=masty_prom;
        //--меняем 2 карты местами в значениях
        power_prom=main_power_array[index];
        main_power_array[index]=main_power_array[number_to_replase];
        main_power_array[number_to_replase]=power_prom;
        //console.log("Finished")
    }

    }
    const timer_4 = time.getMilliseconds();
    if(timer_4-timer_3>=0){
        time_counter=timer_4-timer_3;
    }else{
        time_counter=(timer_4+1000)-timer_3;
    }
    
    console.log("Тасовка калоды завершена! \nВремя выполнения: "+time_counter+"мс\n")
    //console.log("Результат тасовки:\n\n"+main_masty_array+"\n\n"+main_power_array)
}
function in_card_v1(place_to_id,masty,numeral){ 
    var trefi_name="C";
    var bubni_name="D";
    var chervi_name="H";
    var piki_name="S";
    //-------------
    var valet_name="J";
    var korol_name="K";
    var dama_name="Q";
    var tus_name="A";
    /*****************/
    /*****************/
    place=document.getElementById(place_to_id);
    var way="../img/cards_jpeg_test_v1/JPEG/cards/"
    if(numeral==11){way+=valet_name}
    else if(numeral==12){way+=dama_name}
    else if(numeral==13){way+=korol_name}
    else if(numeral==14){way+=tus_name}
    else{way+=numeral}
    if(masty=="trefi"){way+=trefi_name}
    else if(masty=="bubni"){way+=bubni_name}
    else if(masty=="chervi"){way+=chervi_name}
    else if(masty=="piki"){way+=piki_name}
    way+=".jpg"
    if(masty==undefined && numeral==undefined){way="../img/cards_jpeg_test_v1/JPEG/undifined_card/undefined.jpg"; console.log("card in error"+masty+" "+numeral); }
    //alert(way)
    place.src=way;
}


/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/**********************************************************Боты************************************************************ */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */
/************************************************************************************************************************** */

var bot_1 = {
    name:"Бот №1",
    money:10000,
    card_1:{
        masty:"chervi1",
        power:10
    },
    card_2:{
        masty:"chervi1",
        power:10
    },
    card_3:{
        masty:"chervi1",
        power:10
    },
    card_4:{
        masty:"chervi1",
        power:10
    },
    card_5:{
        masty:"chervi1",
        power:10
    },
    komb_amount:0,
    show_cards:false,
    last_komb:"undefined"
}
function lay_out_cards_for_bot_1(card_in_hand_1_masty,card_in_hand_2_masty,card_in_hand_3_masty,card_in_hand_4_masty,card_in_hand_5_masty,card_in_hand_1_power,card_in_hand_2_power,card_in_hand_3_power,card_in_hand_4_power,card_in_hand_5_power,place){
    /*************************************/

    var fleshroyal_count=100;
    var stritflesh_count=90;
    var kare_count=      80;
    var ful_count=       70;
    var flesh_count=     60;
    var strit_count=     50;
    var troyka_count=    40;
    var twopary_count=   30;
    var para_count=      20;
    var starshaya_count= 10;

    
        plase=document.getElementById(place);
        //(((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty))&&((card_in_hand_1_power==10)&&(card_in_hand_2_power==11)&&(card_in_hand_3_power==12)&&(card_in_hand_4_power==13)&&(card_in_hand_5_power==14))) |флеш рояль
        if(((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty))&&((card_in_hand_1_power+card_in_hand_2_power+card_in_hand_3_power+card_in_hand_4_power+card_in_hand_5_power)==60)){
            plase.innerHTML="Флеш рояль"
            bot_1.komb_amount+=fleshroyal_count;
        }else if((((card_in_hand_1_power==card_in_hand_2_power-1)&&(card_in_hand_2_power==card_in_hand_3_power-1)&&(card_in_hand_3_power==card_in_hand_4_power-1)&&(card_in_hand_4_power==card_in_hand_5_power-1))&&((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)))){
            plase.innerHTML="Стрит флеш"
            bot_1.komb_amount+=stritflesh_count;
        }else if(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))){
            plase.innerHTML="Карэ"
            bot_1.komb_amount+=kare_count;
        }else if((((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power))&&(card_in_hand_4_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power))&&(card_in_hand_3_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_5_power))&&(card_in_hand_3_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_2_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_3_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_2_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_3_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_4_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_1_power==card_in_hand_5_power))){
            plase.innerHTML="Фулл хаус"
            bot_1.komb_amount+=ful_count;
        }else if((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)){
            plase.innerHTML="Флеш"
            bot_1.komb_amount+=flesh_count;
        }else if ((card_in_hand_1_power==card_in_hand_2_power-1)&&(card_in_hand_2_power==card_in_hand_3_power-1)&&(card_in_hand_3_power=card_in_hand_4_power-1)&&(card_in_hand_4_power==card_in_hand_5_power-1)) {
            plase.innerHTML="Стрит"
            bot_1.komb_amount+=strit_count;
        }else if((card_in_hand_3_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_3_power)){
            plase.innerHTML="Тройка"
            bot_1.komb_amount+=troyka_count;
        }else if(( card_in_hand_3_power==card_in_hand_4_power && card_in_hand_2_power==card_in_hand_5_power)^( card_in_hand_3_power==card_in_hand_5_power && card_in_hand_2_power==card_in_hand_4_power)^( card_in_hand_2_power==card_in_hand_3_power && card_in_hand_4_power==card_in_hand_5_power)^( card_in_hand_1_power==card_in_hand_5_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_4_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_5_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_3_power && (card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_2_power && (card_in_hand_3_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))){
            plase.innerHTML="2 пары"
            bot_1.komb_amount+=twopary_count;
        }else if(((((((((card_in_hand_1_power==card_in_hand_2_power^card_in_hand_1_power==card_in_hand_3_power)^card_in_hand_1_power==card_in_hand_4_power)^card_in_hand_1_power==card_in_hand_5_power)^card_in_hand_2_power==card_in_hand_3_power)^card_in_hand_2_power==card_in_hand_4_power)^card_in_hand_2_power==card_in_hand_5_power)^card_in_hand_3_power==card_in_hand_4_power)^card_in_hand_3_power==card_in_hand_5_power)^card_in_hand_4_power==card_in_hand_5_power){
            plase.innerHTML="Пара"
            bot_1.komb_amount+=para_count;
        }else {
            bot_1.komb_amount+=starshaya_count;
            plase.innerHTML="Старшая карта"
        }
    
        bot_1.last_komb=plase.textContent


    

}
function give_cards_main_for_bot_1(){
    if(numer_to_give_cards<50){
    cards_act="give"
    bot_1.card_1.masty=main_masty_array[numer_to_give_cards+0];
    bot_1.card_2.masty=main_masty_array[numer_to_give_cards+1];
    bot_1.card_3.masty=main_masty_array[numer_to_give_cards+2];
    bot_1.card_4.masty=main_masty_array[numer_to_give_cards+3];
    bot_1.card_5.masty=main_masty_array[numer_to_give_cards+4];
    //
    bot_1.card_1.power=main_power_array[numer_to_give_cards+0];
    bot_1.card_2.power=main_power_array[numer_to_give_cards+1];
    bot_1.card_3.power=main_power_array[numer_to_give_cards+2];
    bot_1.card_4.power=main_power_array[numer_to_give_cards+3];
    bot_1.card_5.power=main_power_array[numer_to_give_cards+4];
    //
    /*
    console.log("\ncard 1: "+bot_1.card_1.power+" "+bot_1.card_1.masty)
    console.log("\ncard 2: "+bot_1.card_2.power+" "+bot_1.card_2.masty)
    console.log("\ncard 3: "+bot_1.card_3.power+" "+bot_1.card_3.masty)
    console.log("\ncard 4: "+bot_1.card_4.power+" "+bot_1.card_4.masty)
    console.log("\ncard 5: "+bot_1.card_5.power+" "+bot_1.card_5.masty)
    */
    //console.log("function give_cards_main_for_bot_1()");
    //
    
    //
    kombo_div_main.display="none"
    kombo_div_main.innerHTML=""
    cards_act="replacement"
    //--
    //--
    //alert('Выберите карты которые вы хотите поменять нажатием, а затем нажмите кнопку "Поменять карты".\nЕсли вы не хотите менять карты просто нажмите на кнопкy "Поменять карты".\nОтменить выброр карты можно нажав на карту повторно!')
    //--
    numer_to_give_cards+=5;
    kol_coloda-=5;
    if (bot_1.show_cards==true) {
        in_card_bot_1()
    } else {
        in_secret_card_bot_1()
    }
    
}else(alert("Карт в колоде не хватает"))
}

function in_card_bot_1(){
    in_card_v1("card_1_bot_1",bot_1.card_1.masty,bot_1.card_1.power)
    in_card_v1("card_2_bot_1",bot_1.card_2.masty,bot_1.card_2.power)
    in_card_v1("card_3_bot_1",bot_1.card_3.masty,bot_1.card_3.power)
    in_card_v1("card_4_bot_1",bot_1.card_4.masty,bot_1.card_4.power)
    in_card_v1("card_5_bot_1",bot_1.card_5.masty,bot_1.card_5.power)
}
function in_secret_card_bot_1(){
    card_1_bot_1.src="card_back.png"
    card_2_bot_1.src="card_back.png"
    card_3_bot_1.src="card_back.png"
    card_4_bot_1.src="card_back.png"
    card_5_bot_1.src="card_back.png"
}

function change_main_for_bot_1(){
    numer_to_give_cards+=replacement_cards.length
    kol_sbros+=replacement_cards.length
           
    for (let index = 0; index < replacement_cards.length; index++) {

        if(replacement_cards[index]=="playing_card_bot_1_1"){
            var was_card_power=bot_1.card_1.power;
            var was_card_masty=bot_1.card_1.masty;
            bot_1.card_1.masty=main_masty_array[numer_to_give_cards+0];
            bot_1.card_1.power=main_power_array[numer_to_give_cards+0];
            //console.log("Changing card 1\nwas: "+was_card_power+" "+was_card_masty+"\nnow: "+bot_1.card_1.power+" "+bot_1.card_1.masty)
            //console.log("function change_main_for_bot_1()")
            //in_card_v1("card_1_bot_1",bot_1.card_1.masty,bot_1.card_1.power)
        }else if(replacement_cards[index]=="playing_card_bot_1_2"){
            var was_card_power=bot_1.card_2.power;
            var was_card_masty=bot_1.card_2.masty;
            bot_1.card_2.masty=main_masty_array[numer_to_give_cards+1];
            bot_1.card_2.power=main_power_array[numer_to_give_cards+1];
            //console.log("Changing card 2\nwas: "+was_card_power+" "+was_card_masty+"\nnow: "+bot_1.card_2.power+" "+bot_1.card_2.masty)
            //in_card_v1("card_2_bot_1",bot_1.card_2.masty,bot_1.card_2.power)
        }else if(replacement_cards[index]=="playing_card_bot_1_3"){
            var was_card_power=bot_1.card_3.power;
            var was_card_masty=bot_1.card_3.masty;
            bot_1.card_3.masty=main_masty_array[numer_to_give_cards+2];
            bot_1.card_3.power=main_power_array[numer_to_give_cards+2];
            //console.log("Changing card 3\nwas: "+was_card_power+" "+was_card_masty+"\nnow: "+bot_1.card_3.power+" "+bot_1.card_3.masty)
            //in_card_v1("card_3_bot_1",bot_1.card_3.masty,bot_1.card_3.power)
        }else if(replacement_cards[index]=="playing_card_bot_1_4"){
            var was_card_power=bot_1.card_4.power;
            var was_card_masty=bot_1.card_4.masty;
            bot_1.card_4.masty=main_masty_array[numer_to_give_cards+3];
            bot_1.card_4.power=main_power_array[numer_to_give_cards+3];
            //console.log("Changing card 4\nwas: "+was_card_power+" "+was_card_masty+"\nnow: "+bot_1.card_4.power+" "+bot_1.card_4.masty)
            //in_card_v1("card_4_bot_1",bot_1.card_4.masty,bot_1.card_4.power)
        }else if(replacement_cards[index]=="playing_card_bot_1_5"){
            var was_card_power=bot_1.card_5.power;
            var was_card_masty=bot_1.card_5.masty;
            bot_1.card_5.masty=main_masty_array[numer_to_give_cards+4];
            bot_1.card_5.power=main_power_array[numer_to_give_cards+4];
            //console.log("Changing card 5\nwas: "+was_card_power+" "+was_card_masty+"\nnow: "+bot_1.card_5.power+" "+bot_1.card_5.masty)
            //in_card_v1("card_5_bot_1",bot_1.card_5.masty,bot_1.card_5.power)
        }
        
    }
    numer_to_give_cards+=replacement_cards.length
    playing_card_main_1.style.opacity="1"
    playing_card_main_2.style.opacity="1"
    playing_card_main_3.style.opacity="1"
    playing_card_main_4.style.opacity="1"
    playing_card_main_5.style.opacity="1"
    replacement_cards = []
    cards_act="lay_out"
    //--
    //--
}
function just_search_cards_bot_1(card_in_hand_1_masty,card_in_hand_2_masty,card_in_hand_3_masty,card_in_hand_4_masty,card_in_hand_5_masty,card_in_hand_1_power,card_in_hand_2_power,card_in_hand_3_power,card_in_hand_4_power,card_in_hand_5_power){

    if(((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty))&&((card_in_hand_1_power+card_in_hand_2_power+card_in_hand_3_power+card_in_hand_4_power+card_in_hand_5_power)==60)){
        return "Флеш рояль"
    }else if((((card_in_hand_1_power==card_in_hand_2_power-1)&&(card_in_hand_2_power==card_in_hand_3_power-1)&&(card_in_hand_3_power==card_in_hand_4_power-1)&&(card_in_hand_4_power==card_in_hand_5_power-1))&&((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)))){
        return "Стрит флеш"
    }else if(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))){
        return "Карэ"
    }else if((((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power))&&(card_in_hand_4_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power))&&(card_in_hand_3_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_5_power))&&(card_in_hand_3_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_2_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_3_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_2_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_3_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_4_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_1_power==card_in_hand_5_power))){
        return "Фулл хаус"
    }else if((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)){
        return "Флеш"
    }else if ((card_in_hand_1_power==card_in_hand_2_power-1)&&(card_in_hand_2_power==card_in_hand_3_power-1)&&(card_in_hand_3_power=card_in_hand_4_power-1)&&(card_in_hand_4_power==card_in_hand_5_power-1)) {
        return "Стрит"
    }else if((card_in_hand_3_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_3_power)){
        return "Тройка"
    }else if(( card_in_hand_3_power==card_in_hand_4_power && card_in_hand_2_power==card_in_hand_5_power)^( card_in_hand_3_power==card_in_hand_5_power && card_in_hand_2_power==card_in_hand_4_power)^( card_in_hand_2_power==card_in_hand_3_power && card_in_hand_4_power==card_in_hand_5_power)^( card_in_hand_1_power==card_in_hand_5_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_4_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_5_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_3_power && (card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_2_power && (card_in_hand_3_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))){
        return "2 пары"
    }else if(((((((((card_in_hand_1_power==card_in_hand_2_power^card_in_hand_1_power==card_in_hand_3_power)^card_in_hand_1_power==card_in_hand_4_power)^card_in_hand_1_power==card_in_hand_5_power)^card_in_hand_2_power==card_in_hand_3_power)^card_in_hand_2_power==card_in_hand_4_power)^card_in_hand_2_power==card_in_hand_5_power)^card_in_hand_3_power==card_in_hand_4_power)^card_in_hand_3_power==card_in_hand_5_power)^card_in_hand_4_power==card_in_hand_5_power){
        return "Пара"
    }else {
        return "Старшая карта"
    }

}
//for test|  just_search_cards_bot_1(bot_1.card_1.masty,bot_1.card_2.masty,bot_1.card_3.masty,bot_1.card_4.masty,bot_1.card_5.masty,bot_1.card_1.power,bot_1.card_2.power,bot_1.card_3.power,bot_1.card_4.power,bot_1.card_5.power)
function change_kards_for_bot_1(dificult){
    if(dificult=="eazy"){
        console.log(bot_1.name+" chages card on "+dificult+" dificult")
        //replacement_cards= Array("playing_card_bot_1_1","playing_card_bot_1_2","playing_card_bot_1_3","playing_card_bot_1_4","playing_card_bot_1_5")
        //change_main_for_bot_1()
    }else if(dificult=="normal"){
        var just_search_cards_bot_1_result=just_search_cards_bot_1(bot_1.card_1.masty,bot_1.card_2.masty,bot_1.card_3.masty,bot_1.card_4.masty,bot_1.card_5.masty,bot_1.card_1.power,bot_1.card_2.power,bot_1.card_3.power,bot_1.card_4.power,bot_1.card_5.power)
        //
        //console.log(bot_1.name+" had a "+just_search_cards_bot_1_result)
        //
        if(just_search_cards_bot_1_result=="Карэ"){
        
            if(bot_1.card_1.power==bot_1.card_2.power&&bot_1.card_2.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_4.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
        } else if(bot_1.card_1.power==bot_1.card_2.power&&bot_1.card_2.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_5.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
        } else if(bot_1.card_1.power==bot_1.card_2.power&&bot_1.card_2.power==bot_1.card_5.power&&bot_1.card_5.power==bot_1.card_4.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
        } else if(bot_1.card_1.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_4.power&&bot_1.card_4.power==bot_1.card_5.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
        } else if(bot_1.card_2.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_4.power&&bot_1.card_4.power==bot_1.card_5.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
        } 
        } 
        else if(just_search_cards_bot_1_result=="Тройка"){
        
            if(bot_1.card_1.power==bot_1.card_2.power&&bot_1.card_2.power==bot_1.card_3.power){
        replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
        replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
        } else if(bot_1.card_1.power==bot_1.card_2.power&&bot_1.card_2.power==bot_1.card_5.power){
        replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
        replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
        } else if(bot_1.card_1.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_4.power){
        replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
        replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
        } else if(bot_1.card_2.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_4.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
         replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
        } else if(bot_1.card_5.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_4.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
         replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
        }  else if(bot_1.card_2.power==bot_1.card_5.power&&bot_1.card_5.power==bot_1.card_4.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
         replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
        } else if(bot_1.card_2.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_5.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
         replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
        } else if(bot_1.card_2.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_4.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
         replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
        } else if(bot_1.card_2.power==bot_1.card_1.power&&bot_1.card_1.power==bot_1.card_4.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
         replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
        } else if(bot_1.card_1.power==bot_1.card_4.power&&bot_1.card_4.power==bot_1.card_5.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
         replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
        } else if(bot_1.card_1.power==bot_1.card_3.power&&bot_1.card_3.power==bot_1.card_5.power){
         replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
         replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
        }
        }else if(just_search_cards_bot_1_result=="2 пары"){
            if(bot_1.card_1.power!=bot_1.card_2.power&&bot_1.card_1.power!=bot_1.card_3.power&&bot_1.card_1.power!=bot_1.card_4.power&&bot_1.card_1.power!=bot_1.card_5.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
            } else if(bot_1.card_2.power!=bot_1.card_3.power&&bot_1.card_2.power!=bot_1.card_4.power&&bot_1.card_2.power!=bot_1.card_5.power&&bot_1.card_2.power!=bot_1.card_1.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
            } else if(bot_1.card_3.power!=bot_1.card_2.power&&bot_1.card_3.power!=bot_1.card_1.power&&bot_1.card_3.power!=bot_1.card_4.power&&bot_1.card_3.power!=bot_1.card_5.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
            } else if(bot_1.card_4.power!=bot_1.card_2.power&&bot_1.card_4.power!=bot_1.card_3.power&&bot_1.card_4.power!=bot_1.card_1.power&&bot_1.card_4.power!=bot_1.card_5.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
            } else if(bot_1.card_5.power!=bot_1.card_2.power&&bot_1.card_5.power!=bot_1.card_3.power&&bot_1.card_5.power!=bot_1.card_4.power&&bot_1.card_5.power!=bot_1.card_5.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
            } 
        }else if(just_search_cards_bot_1_result=="Пара"){
            if(bot_1.card_1.power==bot_1.card_2.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
            } else if(bot_1.card_1.power==bot_1.card_3.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
            } else if(bot_1.card_1.power==bot_1.card_4.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
            } else if(bot_1.card_1.power==bot_1.card_5.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
            } else if(bot_1.card_2.power==bot_1.card_3.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
            } else if(bot_1.card_2.power==bot_1.card_4.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
            } else if(bot_1.card_2.power==bot_1.card_5.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
            } else if(bot_1.card_3.power==bot_1.card_4.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
            } else if(bot_1.card_3.power==bot_1.card_5.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
            } else if(bot_1.card_4.power==bot_1.card_5.power){
                replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
                replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
            } 
        }else if(just_search_cards_bot_1_result=="Старшая карта"){
            replacement_cards[replacement_cards.length]="playing_card_bot_1_1"
            replacement_cards[replacement_cards.length]="playing_card_bot_1_2"
            replacement_cards[replacement_cards.length]="playing_card_bot_1_3"
            replacement_cards[replacement_cards.length]="playing_card_bot_1_4"
            replacement_cards[replacement_cards.length]="playing_card_bot_1_5"
        }

    }else if(dificult=="hard"){

    }else if(dificult=="cheat"){

    }
}
function bot_1_last_komb_func_1(){
    switch (bot_1.last_komb) {
    case "Старшая карта":
        last_komb_sravn_bot_1.innerHTML="Старшая карта";
        break;
    case "Пара":
        last_komb_sravn_bot_1.innerHTML="Пара";
        break;
    case "2 пары":
        last_komb_sravn_bot_1.innerHTML="2 пары";
        break;
    case "Тройка":
        last_komb_sravn_bot_1.innerHTML="Тройка";
        break;
    case "Флеш":
        last_komb_sravn_bot_1.innerHTML="Флеш";
        break;
    case "Фулл хаус":
        last_komb_sravn_bot_1.innerHTML="Фулл хаус";
        break;
    case "Карэ":
        last_komb_sravn_bot_1.innerHTML="Карэ";
        break;
    case "Стрит флеш":
        last_komb_sravn_bot_1.innerHTML="Стрит флеш";
        break;
    case "Флеш рояль":
        last_komb_sravn_bot_1.innerHTML="Флеш рояль";
        break;
    case "Стрит":
        last_komb_sravn_bot_1.innerHTML="Стрит";
        break;
                                                                                                                                                                                    
    default:
        alert("ERROR")
        //ERRORFUNC
        break;
    }
}
function in_card_v2(){ 
    var trefi_name="C";
    var bubni_name="D";
    var chervi_name="H";
    var piki_name="S";
    //-------------
    var valet_name="J";
    var korol_name="K";
    var dama_name="Q";
    var tus_name="A";
    /*****************/
    /*****************/
    var numeral=bot_1.card_1.power;
    var masty=bot_1.card_1.masty;
    var way="../img/cards_jpeg_test_v1/JPEG/cards/"
    if(numeral==11){way+=valet_name}
    else if(numeral==12){way+=dama_name}
    else if(numeral==13){way+=korol_name}
    else if(numeral==14){way+=tus_name}
    else{way+=numeral}
    if(masty=="trefi"){way+=trefi_name}
    else if(masty=="bubni"){way+=bubni_name}
    else if(masty=="chervi"){way+=chervi_name}
    else if(masty=="piki"){way+=piki_name}
    way+=".jpg"
    console.log("way: "+way)
    if(masty==undefined && numeral==undefined){way="../img/cards_jpeg_test_v1/JPEG/undifined_card/undefined.jpg"; console.log("card in error"+masty+" "+numeral); }
    //alert(way)
    card_1_bot_1.src=way;
    console.log("card_1_bot_1.src: "+card_1_bot_1.src)
}
function helps_func_1(){
    lay_out_cards_for_bot_1(bot_1.card_1.masty,bot_1.card_2.masty,bot_1.card_3.masty,bot_1.card_4.masty,bot_1.card_5.masty,bot_1.card_1.power,bot_1.card_2.power,bot_1.card_3.power,bot_1.card_4.power,bot_1.card_5.power,"kombo_div_main")
}
function helps_func_2(){
    var index_bot_1=best_names.indexOf(bot_1.name);
    //console.log("start "+best_score[index_bot_1])
    best_score[index_bot_1]=bot_1.komb_amount;
    //console.log("end "+best_score[index_bot_1])
}
function helps_func_3(text){
    status_bot_1_main.innerHTML=text
}
function helps_func_4(){
    score_bot_1_main.innerHTML=bot_1.komb_amount
}
function helps_func_5(){
    console.log(player_name+": "+last_komb+"\n"+bot_1.name+": "+bot_1.last_komb)
}

function bot_1_turn(){
    //Выдать карты
    give_cards_main_for_bot_1()
    if (bot_1.show_cards==true) {
        in_card_bot_1()
    } else {
        in_secret_card_bot_1()
    }
    // проверить карты и поменять
    setTimeout(helps_func_3,10,"Меняет карты...")
    setTimeout(change_kards_for_bot_1,5000,main_dificult)
    setTimeout(change_main_for_bot_1,5001)
    if (bot_1.show_cards==true) {
        setTimeout(in_card_bot_1,5002)
    } else {
        setTimeout(in_secret_card_bot_1,5002)
        
    }
    
    // выложить карты
    setTimeout(helps_func_3,10000,"Выложил карты...")
    setTimeout(helps_func_1,10000)
    setTimeout(helps_func_2,10500)
    if (bot_1.show_cards==true) {
        setTimeout(in_card_bot_1,10501)
    } else {
        setTimeout(in_secret_card_bot_1,10501)
        
    }
    /*
        ход бота
        -карты изображения
        выдают карты: рубашка карты
        меняет карты: -
        выкладывает каты: его карты 
    */
   setTimeout(sravn_score_adapt_1,10500)
   setTimeout(helps_func_3,10500,"Ждёт...")
   setTimeout(helps_func_4,10500)
   setTimeout(bot_1_last_komb_func_1,10500)
   setTimeout(winer_last_komb_func_1,15500)

   
}/*
var best_names=new Array("Макс","Андрей","Даня Коваленко","Даня Стадник",bot_1.name,"Вы")
var best_score=new Array(1,110,3,121,bot_1.komb_amount ,0)//Последнее всегда личный результат
*/
var best_names=new Array(bot_1.name,player_name)
var best_score=new Array(bot_1.komb_amount ,0)//Последнее всегда личный результат

var adv=0
/******************************************************************** */
function time_ends_func(){
    score_podrobno.style.display="block"
    game_main.style.display="none"
    get_list_of_best()
    var index_bot_1=best_names.indexOf(bot_1.name);
    best_score[index_bot_1]=bot_1.komb_amount;

    
}