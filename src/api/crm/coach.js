const Coach =[
    {
      'uuid': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
      'name': 'Horácio Gonçalves',
      'email': 'Horacio98@gmail.com',
      'username': 'Dessie79',
      'jobTitle': 'Treinador',
      'phone': '849525156',
      'avatar': require('@/assets/avatar/a1.jpg'),
      'address': {
        'street': '655 Archibald Groves',
        'suite': 'Apt. 818',
        'city': 'Carlosshire',
        'state': 'Arkansas',
        'country': 'Somalia',
        'zipcode': '10406',
        'geo': {
          'lat': '-44.6063',
          'lng': '-169.7706'
        }
      },
      'team':'Costa do Sol',
      'nivel':'1'
    },
    {
      'uuid': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
      'name': 'Nacir Armando',
      'jobTitle': 'Treinador',
      'email': 'Nacir_Armando@yahoo.com',
      'username': 'Jakayla_Crooks86',
      'phone': '849522156',
      'avatar': require('@/assets/avatar/a2.jpg'),
      'address': {
        'street': '281 Tillman Forge',
        'suite': 'Apt. 381',
        'city': 'New Sandrinemouth',
        'state': 'North Dakota',
        'country': 'Reunion',
        'zipcode': '19540-8186',
        'geo': {
          'lat': '-12.3375',
          'lng': '-117.9067'
        }
      },
      'team':'UD de Songo',
      'nivel':'1'
    },
    {
      'uuid': '14ddae1e-986d-42f4-8d17-46a02d469b2b',
      'name': 'Daúde Razaque',
      'jobTitle': 'Treinador',
      'email': 'Daude.Razaque@hotmail.com',
      'username': 'Hobart_Mueller',
      'phone': '843525156',
      'avatar': require('@/assets/avatar/a3.jpg'),
      'address': {
        'street': '706 Padberg Knoll',
        'suite': 'Suite 818',
        'city': 'Port Mablefurt',
        'state': 'Arkansas',
        'country': 'Netherlands Antilles',
        'zipcode': '89975-6584',
        'geo': {
          'lat': '-42.9187',
          'lng': '8.5866'
        }
      },
      'team':'Ferroviário de Maputo',
      'nivel':'1'
    },
    {
      'uuid': '6a03248b-1752-4332-a3a9-7108528cc9d3',
      'name': 'Akil Marcelino',
      'jobTitle': 'Treinador',
      'email': 'Akil.Marcelino@hotmail.com',
      'username': 'Celestine.Casper',
      'phone': '849525116',
      'avatar': require('@/assets/avatar/a4.jpg'),
      'address': {
        'street': '9528 Schroeder Track',
        'suite': 'Apt. 443',
        'city': 'Godfreyburgh',
        'state': 'Montana',
        'country': 'Slovenia',
        'zipcode': '10220',
        'geo': {
          'lat': '36.8638',
          'lng': '20.0047'
        }
      },
      'team':'Ferroviário da Beira',
      'nivel':'1'
    },
    {
      'uuid': 'ee272550-36e8-4fe2-889d-c1ee701c5863',
      'name': 'Antero Cambaco',
      'email': 'Antero.Cambaco@yahoo.com',
      'jobTitle': 'Treinador',
      'username': 'Hortense99',
      'phone': '841225156',
      'avatar': require('@/assets/avatar/a5.jpg'),
      'address': {
        'street': '9046 Allen Ferry',
        'suite': 'Suite 429',
        'city': 'Angushaven',
        'state': 'Michigan',
        'country': 'Costa Rica',
        'zipcode': '92378-7065',
        'geo': {
          'lat': '78.1292',
          'lng': '-134.6632'
        }
      },
      'team':'Ferroviário de Nacala',
      'nivel':'1'
    }
  ];
  
  const getCoachById = (uuid) => {
    return (uuid === undefined) ? Coach[0] : Coach.find(x => x.uuid === uuid);
  };
  
  const getCoach = (limit) => {
    return (limit) ? Coach.slice(0, limit) : Coach;
  };
  
  export {
    Coach,
    getCoach,
    getCoachById
  };
  