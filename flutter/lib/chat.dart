import 'package:flutter/material.dart';

class Chat extends StatelessWidget {
  const Chat({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Row(
          children: [
            CircleAvatar(
              child: Image.network(
                "https://th.bing.com/th/id/R.ab881eb6d9eb3b7f48604182e687379a?rik=XrUYWE6kJ68sGQ&pid=ImgRaw&r=0",
              ),
            ),
            const SizedBox(
              width: 8,
            ),
            const Text("Chat",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20)),
          ],
        ),
        actions: [
          CircleAvatar(
            child: IconButton(
              onPressed: () {},
              icon: const Icon(Icons.edit),
            ),
          )
        ],
      ),
      drawer: const Text(""),
      body: Padding(
          padding:
              const EdgeInsetsDirectional.symmetric(vertical: 30, horizontal: 20),
          child: Column(
            children: [
              InkWell(
                child: Container(
                  decoration: BoxDecoration(
                      color: Colors.grey[200],
                      borderRadius: BorderRadius.circular(30)),
                  child: const Padding(
                    padding: EdgeInsets.all(10),
                    child: Row(
                      children: [
                        Icon(Icons.search),
                        SizedBox(
                          width: 10,
                        ),
                        Text("Search"),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 30,
              ),
              const SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                    Actives(username: "Ahmed Mohamed Badran"),
                  ],
                ),
              ),
              const SizedBox(
                height: 30,
              ),
              const Expanded(
                child: SingleChildScrollView(child: Column(children: [
                  UserChat("Ahmed Badran"),
                  SizedBox(height: 30,),
                  UserChat("Mahmoud Hameda"),
                  SizedBox(height: 30,),
                  UserChat("Ali Ibrahem"),
                  SizedBox(height: 30,),
                  UserChat("Ali Ibrahem"),
                  SizedBox(height: 30,),
                  UserChat("Ali Ibrahem"),
                  SizedBox(height: 30,),
                  UserChat("Sayed Ali"),
                  SizedBox(height: 30,),
                  UserChat("Mohsan Mortda"),
                  SizedBox(height: 30,),
                  UserChat("Mohsan Mortda"),
                  SizedBox(height: 30,),
                  UserChat("Mohsan Mortda"),
                  SizedBox(height: 30,),
                  UserChat("Mohsan Mortda"),
                  SizedBox(height: 30,),
                  UserChat("Mohsan Mortda"),
                  SizedBox(height: 30,),
                  UserChat("Mohsan Mortda"),
                  SizedBox(height: 30,),
                  UserChat("Mohsan Mortda"),
                  SizedBox(height: 30,),
                ])),
              )
            ],
          )),
    );
  }
}

class Actives extends StatelessWidget {
  final String username;
  const Actives({required this.username, super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 70,
      child: Column(
        children: [
          const CircleAvatar(),
          Text(
            username,
            overflow: TextOverflow.ellipsis,
            maxLines: 2,
          ),
        ],
      ),
    );
  }
}

class UserChat extends StatefulWidget {
  final String username;
  const UserChat(this.username, {super.key});

  @override
  State<UserChat> createState() => _UserChatState();
}

class _UserChatState extends State<UserChat> {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        CircleAvatar(
          child: Image.network(
            "https://th.bing.com/th/id/R.ab881eb6d9eb3b7f48604182e687379a?rik=XrUYWE6kJ68sGQ&pid=ImgRaw&r=0",
          ),
        ),
        const SizedBox(
          width: 10,
        ),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(widget.username,
                  style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 20)),
              Text(
                widget.username.split(" ")[0],
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              )
            ],
          ),
        ),
        const Row(children: [
          Text(
            "10:00 AM",
            style: TextStyle(fontSize: 20),
          ),
        ]),
        
      ],
    );
  }
}
