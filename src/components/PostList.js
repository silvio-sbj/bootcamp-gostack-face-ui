import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        "id": 0,
        "author": {
          "name": "Church Alexander",
          "avatar": "https://i.pravatar.cc/150?img=20"
        },
        "date": "16 Jan 2020",
        "content": "Elit fugiat ut quis nisi ut. Sunt nulla reprehenderit aute non nisi eu aute cillum nisi cillum laborum mollit ex exercitation. Velit fugiat non dolore irure et adipisicing. Officia sit dolore irure consequat ut do sint laboris laborum cillum non nostrud velit. Commodo reprehenderit enim nulla consectetur in veniam veniam. Deserunt voluptate enim cupidatat ut non ex nisi officia.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Yvonne Hill",
              "avatar": "https://i.pravatar.cc/150?img=23"
            },
            "date": "16 Jan 2020",
            "content": "Voluptate proident nulla irure esse cillum est est ullamco consequat officia cupidatat veniam. Sunt ut velit proident fugiat officia dolore. Id Lorem sit ad incididunt do cillum proident officia veniam quis velit. Lorem est ad dolore amet pariatur incididunt excepteur. Exercitation sint aliquip velit eiusmod ut proident excepteur.\r\n"
          }
        ]
      },
      {
        "id": 1,
        "author": {
          "name": "Tammy Griffith",
          "avatar": "https://i.pravatar.cc/150?img=17"
        },
        "date": "16 Jan 2020",
        "content": "Anim adipisicing laborum nulla nisi. Consequat enim laboris ullamco sunt nostrud. Amet cillum consectetur consequat ut consectetur eiusmod labore quis ad ullamco labore quis non ea.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Mathis Bentley",
              "avatar": "https://i.pravatar.cc/150?img=26"
            },
            "date": "16 Jan 2020",
            "content": "Qui sunt ex nisi Lorem ipsum ea reprehenderit. Aliqua in velit sunt qui quis ipsum adipisicing ea consequat. Aliqua fugiat magna excepteur tempor ullamco laborum cupidatat. Magna sunt ex sint quis pariatur voluptate amet nisi mollit excepteur reprehenderit dolor excepteur esse. Culpa aliquip culpa laboris id amet. Aute cillum pariatur veniam cillum. Dolore enim veniam excepteur eiusmod amet aute.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Odessa Dalton",
              "avatar": "https://i.pravatar.cc/150?img=23"
            },
            "date": "16 Jan 2020",
            "content": "Velit fugiat ex commodo consectetur eiusmod labore. Fugiat ea veniam est ex aliquip et incididunt ut do sunt aliquip exercitation. Magna excepteur proident ex tempor tempor sit nostrud sit irure non officia aliquip. Nostrud nostrud ad aute aliqua adipisicing laboris commodo fugiat. Tempor labore minim irure dolore do ex ad consectetur esse id incididunt elit laboris. Nisi velit elit eu reprehenderit officia consectetur. Excepteur eu cupidatat ea irure deserunt.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Bonner Mayo",
              "avatar": "https://i.pravatar.cc/150?img=22"
            },
            "date": "16 Jan 2020",
            "content": "Consequat velit proident ut laboris ullamco id. Enim commodo cillum tempor nostrud adipisicing. Cupidatat reprehenderit deserunt duis velit mollit cillum non do. Pariatur ex dolore velit occaecat id laborum eiusmod eu.\r\n"
          }
        ]
      },
      {
        "id": 2,
        "author": {
          "name": "Morton Chandler",
          "avatar": "https://i.pravatar.cc/150?img=13"
        },
        "date": "16 Jan 2020",
        "content": "Tempor laboris occaecat amet voluptate laboris sunt non in mollit tempor culpa mollit. Laboris sint enim cillum dolore tempor officia Lorem cupidatat tempor eiusmod non pariatur ex. Irure sint ex ipsum laborum enim proident.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Mai Cooke",
              "avatar": "https://i.pravatar.cc/150?img=29"
            },
            "date": "16 Jan 2020",
            "content": "Irure ullamco esse ut tempor. Proident excepteur anim anim ad irure enim ea reprehenderit ut mollit. Non sint dolor dolore excepteur reprehenderit eu minim consequat elit reprehenderit ut tempor proident consequat. Cupidatat adipisicing cillum ea amet commodo. Sint ut Lorem fugiat qui quis. Laboris qui ex nulla nisi ea velit ea dolore id. Enim et excepteur amet exercitation eu fugiat ad commodo qui qui.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Walter Carter",
              "avatar": "https://i.pravatar.cc/150?img=22"
            },
            "date": "16 Jan 2020",
            "content": "Incididunt aliqua ea commodo reprehenderit sit voluptate veniam commodo pariatur. Do et deserunt in irure irure est minim consequat sunt. Consectetur sint mollit id in mollit ad et minim laboris culpa commodo. Ad Lorem enim velit irure officia. Magna sint enim mollit sit ad Lorem in labore elit. Nulla minim cupidatat consectetur non elit esse commodo duis fugiat.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Levine Parsons",
              "avatar": "https://i.pravatar.cc/150?img=21"
            },
            "date": "16 Jan 2020",
            "content": "Deserunt consequat ut mollit et excepteur culpa reprehenderit cupidatat ea anim. Adipisicing eu cupidatat officia dolore aute minim esse dolore laboris aute dolor ea occaecat deserunt. Et mollit sint officia id magna ut labore adipisicing velit velit et veniam. Laboris elit et nulla ex non nostrud consequat ea nostrud ullamco ea dolore sit proident. Id ipsum tempor laborum nostrud mollit. Elit ipsum pariatur cillum sunt qui excepteur nulla ullamco anim id voluptate eu.\r\n"
          }
        ]
      },
      {
        "id": 3,
        "author": {
          "name": "Randi Boyer",
          "avatar": "https://i.pravatar.cc/150?img=20"
        },
        "date": "16 Jan 2020",
        "content": "Sit cillum veniam ex consequat do amet velit minim occaecat velit occaecat nostrud nisi. Deserunt aliquip elit reprehenderit dolor. In culpa anim culpa ex esse amet qui non sit culpa.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Rosie Huff",
              "avatar": "https://i.pravatar.cc/150?img=29"
            },
            "date": "16 Jan 2020",
            "content": "Nulla qui occaecat eiusmod consequat culpa tempor. Occaecat aliquip eiusmod ut deserunt id minim aute ut veniam consequat irure anim. Culpa minim minim adipisicing nulla eiusmod aliqua. Nostrud aliquip in fugiat dolore amet.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Watts Morin",
              "avatar": "https://i.pravatar.cc/150?img=27"
            },
            "date": "16 Jan 2020",
            "content": "Cupidatat nisi cupidatat anim officia voluptate ut. Laboris dolor sunt consectetur occaecat minim voluptate dolor sit cillum duis esse aliqua ullamco dolore. Sint exercitation aliqua aliqua tempor quis est minim duis commodo non ex aliqua. Cillum ex duis eiusmod amet enim irure elit sint sint dolore. Anim sint enim ad adipisicing dolor est non. Consequat culpa ipsum amet ex voluptate fugiat ea qui sunt ea dolore enim deserunt. Commodo labore nulla velit Lorem cillum commodo amet nulla veniam enim elit sint deserunt fugiat.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Lilia Mckinney",
              "avatar": "https://i.pravatar.cc/150?img=28"
            },
            "date": "16 Jan 2020",
            "content": "Aliqua non laborum eiusmod mollit qui ut proident occaecat nostrud. Qui esse anim voluptate velit sunt do adipisicing est occaecat anim. Ad eu Lorem dolore laboris veniam pariatur nostrud ex et exercitation enim. Excepteur cupidatat dolor ad dolor anim ea sunt cupidatat nostrud aliquip eu commodo. Sunt qui culpa tempor duis cillum sit deserunt deserunt nisi enim. Commodo tempor exercitation ea voluptate nisi quis excepteur.\r\n"
          }
        ]
      },
      {
        "id": 4,
        "author": {
          "name": "Latasha Willis",
          "avatar": "https://i.pravatar.cc/150?img=12"
        },
        "date": "16 Jan 2020",
        "content": "Voluptate fugiat ullamco elit proident irure magna do incididunt anim laborum nostrud dolor commodo duis. Deserunt consequat veniam ex velit commodo eu. Lorem commodo deserunt veniam ex nostrud adipisicing consequat nisi officia dolor non laborum. Ullamco cillum elit laboris exercitation pariatur sit cupidatat nostrud anim tempor incididunt fugiat ea deserunt. Do reprehenderit quis officia veniam sunt nisi anim pariatur laboris laborum mollit dolor labore occaecat.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Guadalupe Crawford",
              "avatar": "https://i.pravatar.cc/150?img=29"
            },
            "date": "16 Jan 2020",
            "content": "Nulla enim cillum quis Lorem incididunt. Aliqua eiusmod ipsum sint eiusmod deserunt. In minim adipisicing nulla commodo occaecat fugiat irure exercitation. Minim tempor incididunt incididunt eiusmod aliqua qui cupidatat anim voluptate deserunt anim aute. Laboris ex elit reprehenderit magna ex anim reprehenderit magna sunt consectetur nisi adipisicing deserunt pariatur.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Robin Sweeney",
              "avatar": "https://i.pravatar.cc/150?img=24"
            },
            "date": "16 Jan 2020",
            "content": "Culpa incididunt aliqua laborum nulla. Sint ea adipisicing ullamco mollit excepteur deserunt mollit minim irure pariatur nisi. Tempor labore nisi culpa do occaecat excepteur elit laborum. Amet non est elit officia dolor consectetur voluptate consectetur occaecat non laboris ex. Proident aliqua elit ea do ad laboris. Quis occaecat ipsum amet adipisicing.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Shawna Klein",
              "avatar": "https://i.pravatar.cc/150?img=24"
            },
            "date": "16 Jan 2020",
            "content": "Mollit veniam nostrud ex id cupidatat duis. Qui laborum ullamco voluptate amet elit sit eiusmod voluptate labore laboris cupidatat quis laborum incididunt. Sint laborum laborum proident nulla adipisicing sunt ipsum officia ullamco elit consectetur eiusmod cupidatat. Velit et duis eu ex quis laborum do exercitation. Adipisicing ea esse est ullamco est.\r\n"
          }
        ]
      },
      {
        "id": 5,
        "author": {
          "name": "Patrica Lee",
          "avatar": "https://i.pravatar.cc/150?img=16"
        },
        "date": "16 Jan 2020",
        "content": "Ut in ullamco nisi nulla laboris sunt ad ea esse. Occaecat velit reprehenderit dolor proident aute esse labore amet nulla duis proident laboris in. Sunt non ex excepteur consectetur Lorem non pariatur laboris est consequat veniam ut laboris. Sunt qui occaecat esse do voluptate aute sunt consequat voluptate excepteur ad occaecat do. Cillum in esse nulla deserunt exercitation do Lorem qui. Pariatur do sunt velit velit sunt pariatur aliqua sint consequat fugiat ad eiusmod cupidatat sunt.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Morrow Cox",
              "avatar": "https://i.pravatar.cc/150?img=28"
            },
            "date": "16 Jan 2020",
            "content": "Sunt nostrud sint deserunt excepteur do eiusmod qui est. Exercitation elit fugiat id minim. Est incididunt nulla occaecat minim.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Justice Bond",
              "avatar": "https://i.pravatar.cc/150?img=30"
            },
            "date": "16 Jan 2020",
            "content": "Id aliquip consequat proident in labore. Ad aliquip reprehenderit Lorem labore sint ea ex. Ut consectetur ea proident consectetur eiusmod. Duis amet laboris est aute.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Drake Fox",
              "avatar": "https://i.pravatar.cc/150?img=22"
            },
            "date": "16 Jan 2020",
            "content": "Nulla proident aute veniam mollit nostrud deserunt tempor ea adipisicing fugiat nostrud qui. Anim consectetur id eu ipsum ex elit do adipisicing. Laboris et cupidatat aliqua deserunt cillum occaecat officia ea. Do mollit anim labore elit cillum reprehenderit non labore aliqua. Non aliquip anim duis dolore et esse voluptate aute aute aliqua proident.\r\n"
          }
        ]
      },
      {
        "id": 6,
        "author": {
          "name": "Misty Nieves",
          "avatar": "https://i.pravatar.cc/150?img=14"
        },
        "date": "16 Jan 2020",
        "content": "Elit sint cillum laboris Lorem sit adipisicing ipsum ullamco amet proident ex minim nostrud nulla. Aliqua laborum tempor sit dolor velit tempor reprehenderit. Duis aliquip dolor ex occaecat ut minim veniam. Aliqua est velit voluptate eiusmod exercitation culpa consequat Lorem irure reprehenderit exercitation enim. Qui id Lorem do qui ipsum. Ad elit nostrud esse non laborum.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Araceli Berger",
              "avatar": "https://i.pravatar.cc/150?img=24"
            },
            "date": "16 Jan 2020",
            "content": "Consectetur pariatur cupidatat excepteur dolore sint nisi dolor et. Irure sunt tempor incididunt ullamco excepteur eu nostrud reprehenderit aliqua magna Lorem. Duis eiusmod aute eiusmod duis ea anim aliqua pariatur exercitation laboris laborum amet nostrud. Fugiat commodo veniam nisi deserunt ad mollit amet consectetur consectetur pariatur.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Velma Goff",
              "avatar": "https://i.pravatar.cc/150?img=26"
            },
            "date": "16 Jan 2020",
            "content": "Commodo velit velit qui labore do Lorem magna. Ipsum fugiat nostrud ex reprehenderit in Lorem est fugiat sit. Veniam deserunt non ex ut consequat reprehenderit dolor magna sunt pariatur.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Chandra Bullock",
              "avatar": "https://i.pravatar.cc/150?img=26"
            },
            "date": "16 Jan 2020",
            "content": "Ullamco Lorem deserunt duis pariatur magna deserunt sit nulla. Reprehenderit laborum irure veniam irure sunt cillum laborum nostrud mollit enim. Deserunt incididunt sunt adipisicing labore sint qui ad mollit non labore officia. Elit sunt labore cupidatat enim laboris elit amet reprehenderit nostrud veniam. Id nulla excepteur exercitation eiusmod culpa esse cillum nostrud id. Proident culpa officia ipsum cupidatat aliquip sunt tempor ipsum minim aliqua esse deserunt ad. Sunt ut ea labore incididunt amet officia qui eiusmod adipisicing eiusmod dolore.\r\n"
          }
        ]
      },
      {
        "id": 7,
        "author": {
          "name": "Castro Daniels",
          "avatar": "https://i.pravatar.cc/150?img=11"
        },
        "date": "16 Jan 2020",
        "content": "Nostrud consectetur nulla adipisicing ut ea mollit nisi mollit enim velit incididunt incididunt magna anim. Quis nisi ea labore qui tempor consequat occaecat culpa eu commodo aliquip elit. Consequat esse proident ad do nostrud ad anim dolor aute eiusmod. Esse do et dolor consequat. Sunt excepteur tempor pariatur amet id ad. Ex esse sit aliquip aute cillum culpa nostrud exercitation anim quis aliqua. Dolor commodo Lorem cupidatat pariatur consectetur.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Stanton Blackwell",
              "avatar": "https://i.pravatar.cc/150?img=25"
            },
            "date": "16 Jan 2020",
            "content": "Ipsum incididunt exercitation anim mollit et voluptate id ipsum ullamco elit ipsum. Deserunt ipsum quis sunt dolore irure Lorem exercitation culpa. Occaecat labore dolor in tempor do consequat. Excepteur pariatur do culpa pariatur tempor dolore occaecat do aliquip. Aliquip et fugiat elit magna non esse sint excepteur reprehenderit esse exercitation sint sunt tempor. Excepteur nostrud labore culpa aute do irure officia excepteur dolore labore.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Erna Santana",
              "avatar": "https://i.pravatar.cc/150?img=26"
            },
            "date": "16 Jan 2020",
            "content": "Exercitation mollit incididunt pariatur laborum proident veniam commodo commodo duis nulla sint officia. Incididunt Lorem eu et amet id ut Lorem. Dolor qui officia non sint ipsum culpa qui culpa mollit deserunt id. Velit amet consectetur pariatur est nulla elit ullamco cupidatat voluptate anim occaecat aliquip. Laboris occaecat excepteur qui veniam laborum qui ex ut eiusmod ex. Et cillum aliquip nisi laboris sint veniam eiusmod.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Hurst Romero",
              "avatar": "https://i.pravatar.cc/150?img=28"
            },
            "date": "16 Jan 2020",
            "content": "Consectetur do sint dolore et enim pariatur aute sit consectetur incididunt nostrud elit incididunt aliqua. Incididunt pariatur officia dolore pariatur amet est. Elit laborum esse id mollit sit.\r\n"
          }
        ]
      },
      {
        "id": 8,
        "author": {
          "name": "Carolyn Holland",
          "avatar": "https://i.pravatar.cc/150?img=16"
        },
        "date": "16 Jan 2020",
        "content": "Do deserunt magna sunt occaecat nostrud tempor officia nisi ut ad. Reprehenderit pariatur fugiat incididunt ullamco laborum eiusmod cillum id aute duis irure fugiat. Fugiat amet sint laboris magna nostrud. Ipsum laboris occaecat voluptate quis cillum eiusmod elit ad magna officia reprehenderit reprehenderit. Aliquip cupidatat dolor esse pariatur. Non incididunt consequat quis minim proident anim amet adipisicing incididunt sunt. Nisi deserunt laboris id voluptate ullamco dolore consectetur aute aliquip tempor sint.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Angeline Mcgowan",
              "avatar": "https://i.pravatar.cc/150?img=21"
            },
            "date": "16 Jan 2020",
            "content": "Id sit eiusmod est sint elit ad exercitation est. Nulla consectetur Lorem in irure aute amet deserunt id incididunt ea id fugiat nulla officia. Eiusmod sint laboris non non aliquip esse proident laboris est consequat elit nisi. Sit fugiat excepteur dolore irure laborum mollit occaecat tempor enim commodo. Est commodo anim est cillum amet culpa eu ex amet tempor et consequat.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Selena Garza",
              "avatar": "https://i.pravatar.cc/150?img=24"
            },
            "date": "16 Jan 2020",
            "content": "Reprehenderit non pariatur exercitation sunt id culpa excepteur irure culpa. Enim deserunt occaecat magna excepteur ipsum quis in irure voluptate aliquip magna anim dolore. Elit occaecat culpa anim eu aliquip nisi qui aliquip.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Emilia Golden",
              "avatar": "https://i.pravatar.cc/150?img=27"
            },
            "date": "16 Jan 2020",
            "content": "Esse commodo nisi est fugiat duis. Anim nisi commodo consectetur reprehenderit dolor nostrud enim aliqua. Sunt dolore in incididunt anim fugiat ipsum do laborum consequat sunt eiusmod. Dolore eiusmod sunt magna aute voluptate eu enim. Et irure veniam duis et.\r\n"
          }
        ]
      },
      {
        "id": 9,
        "author": {
          "name": "Mcmillan Stone",
          "avatar": "https://i.pravatar.cc/150?img=18"
        },
        "date": "16 Jan 2020",
        "content": "Et cupidatat velit velit amet exercitation laboris commodo tempor non eu do esse. Occaecat incididunt voluptate enim officia proident. Duis eiusmod proident irure dolore exercitation deserunt ad excepteur anim dolor exercitation ipsum labore.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Belinda Garrett",
              "avatar": "https://i.pravatar.cc/150?img=22"
            },
            "date": "16 Jan 2020",
            "content": "Consectetur et Lorem culpa eu nulla excepteur. Commodo officia sit veniam amet pariatur. Laboris eu consectetur incididunt mollit qui. Eiusmod nostrud sit et ex fugiat commodo eu. Lorem reprehenderit irure anim in anim dolore culpa magna veniam do consequat sint.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Ilene Maldonado",
              "avatar": "https://i.pravatar.cc/150?img=28"
            },
            "date": "16 Jan 2020",
            "content": "Nostrud magna minim fugiat eiusmod reprehenderit velit cillum. Amet adipisicing eiusmod fugiat amet ea duis dolore id ex veniam esse. Irure dolore ullamco fugiat dolor do minim laborum id consectetur enim deserunt. Ipsum mollit culpa nulla amet ipsum magna. Laboris laborum ullamco velit commodo laboris elit. Proident non commodo duis do mollit nostrud.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Bean Boyle",
              "avatar": "https://i.pravatar.cc/150?img=21"
            },
            "date": "16 Jan 2020",
            "content": "Reprehenderit voluptate velit exercitation officia cillum veniam minim et deserunt ipsum minim nulla. Eu sunt nisi velit id. Eiusmod eu sit incididunt officia reprehenderit adipisicing amet irure exercitation qui. Aute irure culpa pariatur proident eu excepteur Lorem nulla mollit qui nostrud laboris reprehenderit. Id nisi dolore aute nostrud Lorem pariatur non eiusmod. Non exercitation laborum aliqua officia eu sit magna commodo est qui proident in.\r\n"
          }
        ]
      },
      {
        "id": 10,
        "author": {
          "name": "Bell Walter",
          "avatar": "https://i.pravatar.cc/150?img=10"
        },
        "date": "16 Jan 2020",
        "content": "Dolor sunt eu tempor consequat voluptate ex adipisicing cillum quis non veniam do occaecat. Labore cillum anim ipsum Lorem sint cillum aliqua nostrud nulla. Reprehenderit sit do non anim. Est dolor sint in excepteur sit minim. Aliquip anim aliqua ut deserunt esse. Aliquip id cupidatat enim sint. Non ad tempor aute quis ullamco sint labore exercitation et do.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Meyers Melton",
              "avatar": "https://i.pravatar.cc/150?img=28"
            },
            "date": "16 Jan 2020",
            "content": "Excepteur occaecat duis duis fugiat officia mollit do anim aute amet. Mollit commodo cillum amet incididunt. Quis ex cupidatat sint pariatur elit duis exercitation sit ullamco veniam aliqua ut excepteur duis. In ullamco proident id enim sit excepteur.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Janice Hester",
              "avatar": "https://i.pravatar.cc/150?img=25"
            },
            "date": "16 Jan 2020",
            "content": "Lorem nostrud nisi amet consequat do dolore pariatur velit. Aliquip commodo dolore dolor elit veniam in deserunt aliqua labore excepteur voluptate eu enim aliquip. Officia do exercitation culpa sunt.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Jerry Ayala",
              "avatar": "https://i.pravatar.cc/150?img=27"
            },
            "date": "16 Jan 2020",
            "content": "Consectetur voluptate tempor voluptate magna irure nisi ex aliqua ea exercitation. Ex irure magna laborum nostrud eu non laborum. Ipsum amet dolor sunt veniam ut adipisicing et culpa ullamco occaecat eiusmod. Excepteur laboris dolor cillum ut elit amet aliqua.\r\n"
          }
        ]
      },
      {
        "id": 11,
        "author": {
          "name": "Adeline Marks",
          "avatar": "https://i.pravatar.cc/150?img=16"
        },
        "date": "16 Jan 2020",
        "content": "Officia nisi duis est enim deserunt nisi amet reprehenderit fugiat tempor deserunt ipsum aliquip. Excepteur exercitation cupidatat ut et nostrud irure sint. Laboris dolor id duis adipisicing ullamco voluptate nulla voluptate dolore do. Tempor laborum tempor officia nostrud ea cupidatat irure eiusmod aute nostrud exercitation consectetur adipisicing aute.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Glover Thompson",
              "avatar": "https://i.pravatar.cc/150?img=25"
            },
            "date": "16 Jan 2020",
            "content": "Eiusmod velit eiusmod velit amet eu qui cupidatat ut non cupidatat id et. Eiusmod laborum elit reprehenderit amet culpa ut deserunt nulla ea qui elit nulla eiusmod. Officia id ea anim et id exercitation elit exercitation laboris nostrud ad.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Lindsay Miranda",
              "avatar": "https://i.pravatar.cc/150?img=30"
            },
            "date": "16 Jan 2020",
            "content": "Esse et ea non cillum anim adipisicing. Eiusmod dolor dolor quis enim eiusmod magna sint laborum anim do velit tempor reprehenderit. Amet nulla veniam nisi laboris magna adipisicing id. Duis ipsum et labore nostrud sunt non nisi amet aliqua exercitation deserunt pariatur exercitation ad.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Ursula Walton",
              "avatar": "https://i.pravatar.cc/150?img=28"
            },
            "date": "16 Jan 2020",
            "content": "Aliqua eiusmod non laborum mollit occaecat dolor eiusmod aliquip quis pariatur do adipisicing. Ea ex consectetur voluptate tempor dolor. Minim tempor consequat laboris incididunt. Officia laborum qui deserunt nostrud eiusmod mollit. Commodo id tempor nostrud ea sunt cupidatat excepteur incididunt dolore. Duis esse ipsum elit incididunt.\r\n"
          }
        ]
      },
      {
        "id": 12,
        "author": {
          "name": "Wilcox Waller",
          "avatar": "https://i.pravatar.cc/150?img=18"
        },
        "date": "16 Jan 2020",
        "content": "Sit ad sunt proident commodo nulla in Lorem quis ad incididunt dolore dolor anim cupidatat. Reprehenderit sit consectetur est ut tempor labore eiusmod dolor est mollit culpa esse. Esse laborum laborum excepteur ex nisi sit sit. Exercitation sunt eiusmod ut consequat et tempor do ut mollit officia et consectetur sunt sint. Aute deserunt eiusmod commodo velit officia sunt sint id quis deserunt sit.\r\n",
        "comments": [
          {
            "id": 0,
            "author": {
              "name": "Kerry Powell",
              "avatar": "https://i.pravatar.cc/150?img=24"
            },
            "date": "16 Jan 2020",
            "content": "Veniam minim adipisicing magna dolor quis irure. Exercitation sunt anim irure incididunt sit voluptate nulla nulla ipsum sint mollit excepteur mollit do. Nulla Lorem in ad et adipisicing. Sit cillum occaecat culpa et ad consectetur culpa occaecat. Ex sunt excepteur ad amet eiusmod pariatur Lorem nostrud aute sunt Lorem dolor in non. Amet et aute eiusmod aute in.\r\n"
          },
          {
            "id": 1,
            "author": {
              "name": "Ball Gillespie",
              "avatar": "https://i.pravatar.cc/150?img=28"
            },
            "date": "16 Jan 2020",
            "content": "Labore eiusmod ipsum nisi elit magna irure laboris cupidatat amet tempor. Excepteur labore Lorem laborum ut Lorem esse occaecat Lorem labore tempor Lorem reprehenderit velit sit. Sit duis Lorem adipisicing anim nulla.\r\n"
          },
          {
            "id": 2,
            "author": {
              "name": "Jeanine Yang",
              "avatar": "https://i.pravatar.cc/150?img=29"
            },
            "date": "16 Jan 2020",
            "content": "Laborum id dolor eu quis quis ipsum mollit aute aliqua laborum est. Aliqua minim qui ea non cupidatat irure sint. Deserunt id magna ipsum anim enim consequat est. Eu est amet tempor adipisicing exercitation irure. Anim et ullamco cillum sit ex. Magna ullamco aliquip consectetur excepteur ullamco pariatur proident commodo ad anim amet aliquip.\r\n"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;