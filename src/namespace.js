/**
 * @author    Park ji man
 * @version   0.0.1
 * @desc      NTS Javascript Namespace
 */


/**
 * @name nts
 * @namespace
 */

var nts = nts || {};


/**
 * @name nts.spinbox
 * @desc spinbox namespace
 * @requirement
 * OOP로 개발합니다.
 * Jindo를 사용하여 개발해야 합니다.
 * Coding Convention을 준수해야 합니다.
 * 웹 페이지에 하나 이상의 스핀박스 HTML을 넣으세요.
 * 스핀박스의 텍스트 상자에는 기본적으로 숫자 200이 들어가게 해주세요.
 * ▲ 버튼을 누르면(mousedown) 숫자는 1이 증가하고, ▼ 버튼을 누르면 숫자는 1이 감소합니다.
 * 숫자의 증감은 100~300 사이의 범위에서만 바뀌도록 합니다.
 * 텍스트 상자에는 사용자가 숫자를 직접 입력 할 수 있으며 포커스 아웃(blur)시에 숫자 외의 글자는 모두 지워지게 해주세요. (만약 ab12c3라고 입력했다면 123만 남습니다.)
 * 텍스트 상자에 사용자가 직접 입력한 숫자가 100~300 범위를 벗어나면 포커스 아웃(blur)시에 100미만 일 때는 100으로, 300초과 일 때는 300으로 설정되게 해주세요.
 * ▲ 버튼 또는 ▼ 버튼을 누르고 있으면 처음 누르기 시작한지 0.5초 후부터 0.1초마다 1씩 증감하도록 해주세요.
 */

nts.spinbox = nts.spinbox || {};