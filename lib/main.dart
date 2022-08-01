// ignore_for_file: unnecessary_this

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(const MaterialApp(
      title: 'weather app',
      home: MyApp(),
    ));

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  // ignore: library_private_types_in_public_api
  State<StatefulWidget> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  // ignore: prefer_typing_uninitialized_variables
  var temp;
  // ignore: prefer_typing_uninitialized_variables
  var description;
  // ignore: prefer_typing_uninitialized_variables
  var currently;
  // ignore: prefer_typing_uninitialized_variables
  var humidity;
  // ignore: prefer_typing_uninitialized_variables
  var windSpeed;

  Future getWeather() async {
    http.Response response = await http.get(Uri.parse(
        'https://api.openweathermap.org/data/2.5/weather?q=Kigali&units=imperial&appid=7515938d095ad2233a00696b4cc1e41d'));
    var results = jsonDecode(response.body);
    this.setState(() {
      this.temp = results['main']['temp'];
      this.currently = results['weather'][0]['main'];
      description = results['weather'][0]['description'];
      humidity = results['main']['humidity'];
      windSpeed = results['wind']['speed'];
    });
  }

  @override
  void initState() {
    super.initState();
    getWeather();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          backgroundColor: Colors.blue[0xff10],
          elevation: 0,
          title: const Text('Weather App'),
        ),
        body: Center(
          child: Column(
            children: <Widget>[
              Container(
                height: MediaQuery.of(context).size.height * 0.2,
                color: Colors.blue,
                width: MediaQuery.of(context).size.width,
                child: Column(
                  children: <Widget>[
                    const Padding(padding: EdgeInsets.only(top: 20)),
                    const Text(
                      'Currently In Kigali',
                      style: TextStyle(
                        fontSize: 20,
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 20),
                      child: Text(
                        temp != null ? '$temp\u00B0' : "loading",
                        style: const TextStyle(
                          fontSize: 20,
                          color: Colors.white,
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 20),
                      child: Text(
                        currently != null ? currently.toString() : "loading",
                        style: const TextStyle(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                  ],
                ),
              ),
              Image(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height * 0.2,
                fit: BoxFit.cover,
                image: const AssetImage('images/kigali2.jpg'),
              ),
              Expanded(
                  child: Padding(
                      padding: const EdgeInsets.only(right: 20, left: 20),
                      child: Padding(
                        padding: const EdgeInsets.only(top: 8.0),
                        child: ListView(
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(top: 16.0),
                              child: ListTile(
                                leading: const FaIcon(
                                    FontAwesomeIcons.temperatureHalf),
                                title: const Text('Temperature',
                                    style: TextStyle(fontSize: 20)),
                                trailing: Text(
                                  temp != null ? '${temp}\u00B0' : "loading",
                                  style: const TextStyle(fontSize: 20),
                                ),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top: 16.0),
                              child: ListTile(
                                leading: const Icon(Icons.cloud),
                                title: const Text('Clouds',
                                    style: TextStyle(fontSize: 20)),
                                trailing: Text(
                                  description != null
                                      ? description.toString()
                                      : "loading",
                                  style: const TextStyle(fontSize: 20),
                                ),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top: 16.0),
                              child: ListTile(
                                // mouseCursor: ,
                                leading: const Icon(Icons.wind_power),
                                title: const Text('wind power',
                                    style: TextStyle(fontSize: 20)),
                                trailing: Text(
                                  windSpeed != null
                                      ? windSpeed.toString()
                                      : 'loading',
                                  style: const TextStyle(fontSize: 20),
                                ),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top: 16.0),
                              child: ListTile(
                                // mouseCursor: ,
                                leading: const FaIcon(FontAwesomeIcons.sun),
                                title: const Text('Humidity',
                                    style: TextStyle(fontSize: 20)),
                                trailing: Text(
                                  humidity != null
                                      ? humidity.toString()
                                      : "loading",
                                  style: const TextStyle(fontSize: 20),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ))),
            ],
          ),
        ),
        bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.menu),
              label: 'Menu',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.search),
              label: 'Search',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.settings),
              label: 'Settings',
            ),
          ],
        ),
      ),
    );
  }
}
