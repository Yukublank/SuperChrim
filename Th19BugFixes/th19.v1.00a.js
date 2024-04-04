{
  "binhacks": {
      "LaserCap": {
      "addr": "Rx11DBA9",
      "code": "9600"
    },
    "LaserBounceFix": {
      "addr": "Rx11BA29",
      "code": "\
        D947 7C \
        D947 78 \
        D9FB \
        D8CA \
        D95D E8 \
        DEC9 \
        D95D EC \
        F20F104D E8 \
        F20F1047 60 \
        0F58C8 \
        0F114D E8 \
        0F28C1 \
        0FC6C0 55 \
        <nop:50> \
        90 \
        F30F1015 <Rx1878D8> \
        0F2FD1 \
      "
    },
    "NazrinExOrinC2Fix": {
      "addr": "RxF75D0",
      "code": "\
        00007008 \
        74 \
      "
    },
    "NazrinC2ExFix": {
      "addr": "Rx10D8DC",
      "code": "00"
    },
    "YachieLaserCancelA": {
      "addr": "Rx116F6A",
      "code": "90909090"
    },
    "YachieLaserCancelB": {
      "addr": "Rx1197BA",
      "code": "90909090"
    },
    "SuikaBombFixA": {
      "addr": "Rx22738",
      "code": "FC00"
    },
    "SuikaBombFixB": {
      "addr": "Rx22745",
      "code": "\
        83C6 0C \
        <nop:8> \
      "
    },
    "SuikaBombFixC": {
      "addr": "Rx227DC",
      "code": "65"
    },
    "ChiyariExFixA": {
      "addr": "Rx10641B",
      "code": "13"
    },
    "ChiyariExFixB": {
      "addr": "Rx10641F",
      "code": "C7 81 A8000000 00000000"
    },
    "ChiyariExFixC": {
      "addr": "Rx106429",
      "code": "8991 AC000000"
    },
    "ChiyariExFixD": {
      "addr": "Rx10642F",
      "code": "\
        C741 1000000000 \
        909090 \
      "
    },
    "ZanmuC2Fix": {
      "addr": "RxF8C1F",
      "code": "80"
    },
    "VsReturnToCharacterSelectMenuFix": {
      "addr": "Rx12570F",
      "code": " \
        8BD6 \
        83F9 02 \
        0F4EC2 \
        8B00 \
        8906 \
        83F8 01 \
        75 14 \
        6987 00040000 C0020000 \
        C780 <Rx200B0C> 01000000 \
        81A3 40010000 EFFFF7FF \
       "
    },
    "Achievement21A": {
      "addr": "Rx106B5C",
      "code": "6079"
    },
    "Achievement21B": {
      "addr": "Rx106B65",
      "code": "6079"
    },
    "Achievement21C": {
      "addr": "Rx106B7C",
      "code": "6079"
    },
    "Achievement21D": {
      "addr": "Rx106B90",
      "code": "6079"
    }
  }
}