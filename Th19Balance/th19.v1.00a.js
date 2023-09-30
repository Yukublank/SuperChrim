{
  "binhacks": {
    "BulletCap": {
      "addr": "RxE5B54",
      "code": "B004"
    },
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
    "YachieLaserCancelA": {
      "addr": "Rx116F6A",
      "code": "90909090"
    },
    "YachieLaserCancelB": {
      "addr": "Rx1197BA",
      "code": "90909090"
    },

    "NazrinScopeSpeedIncrease": {
      "addr": "Rx188D6",
      "code": "BB"

    },
    "ZanmuC2Speed": {
      "addr": "Rx299BF",
      "code": "6F"
    },
    "ZanmuC2Range": {
      "addr": "Rx299C9",
      "code": "14"

    },
    "ReimuC2Range": {
      "addr": "Rx127C2F",
      "code": "9A"
    },
    "ReimuC2Time1": {
      "addr": "Rx127D97",
      "code": "36"
    },
    "ReimuC2Time2": {
      "addr": "Rx127BA1",
      "code": "9090"
    },

    "NerfZanmuCard2A": {
      "addr": "RxD7E57",
      "code": "\
        8B50 2C \
        8B42 30 \
        31C9 \
        85C0 \
        0F48C1 \
        BE C4090000 \
        39F0 \
        0F4FC6 \
        8942 30 \
        BE FFFFFFFF \
        <nop:15> \
      "
    },
    "NerfZanmuCard2B": {
      "addr": "RxD8359",
      "code": "\
        8B46 2C \
        31C9 \
        85C0 \
        0F48C1 \
        BA C4090000 \
        39D0 \
        0F4FC2 \
        8946 2C \
        31F6 \
        90<nop:18> \
      "
    },
    "NerfZanmuCard2C": {
      "addr": "RxD83F8",
      "code": "\
        96 \
        8481 B5000000 \
      "
    }
  }
}