import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:test_flutter/chat.dart';
import 'package:test_flutter/reg.dart';
import 'firebase_options.dart';
import 'package:firebase_auth/firebase_auth.dart';

Future<void> main() async {
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: const HomeScreen(),
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          appBarTheme: const AppBarTheme(
        elevation: 7,
        shadowColor: Colors.black,
      )),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  bool isVis = true;
  var auth = FirebaseAuth.instance;
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  void changeVis() {
    setState(() {
      isVis = !isVis;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.black,
          foregroundColor: Colors.amber,
          leading: IconButton(
            icon: const Icon(Icons.phone),
            onPressed: () {},
          ),
          title: const Text("Log in"),
          centerTitle: true,
          actions: const [
            Icon(Icons.notification_add),
            SizedBox(
              width: 5,
            )
          ],
        ),
        body: SizedBox(
          width: double.infinity,
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Form(
              key: _formKey,
              child: Column(children: [
                const SizedBox(
                  height: 30,
                ),
                const Image(
                  image: NetworkImage(
                      "https://th.bing.com/th/id/R.ab881eb6d9eb3b7f48604182e687379a?rik=XrUYWE6kJ68sGQ&pid=ImgRaw&r=0"),
                  width: 100,
                ),
                const SizedBox(
                  height: 15,
                ),
                TextFormField(
                  decoration: InputDecoration(
                    labelText: "Email",
                    suffixIcon: IconButton(
                      icon: const Icon(Icons.email),
                      onPressed: () {},
                    ),
                    border: const OutlineInputBorder(),
                  ),
                  controller: _emailController,
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Email is empty';
                    } else if (!RegExp("^[a-zA-Z0-9+_.-]+@[a-z]+.com")
                        .hasMatch(value)) {
                      return 'Its email not valid';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 15),
                TextFormField(
                  obscureText: isVis,
                  keyboardType: TextInputType.visiblePassword,
                  decoration: InputDecoration(
                      label: const Text("Password"),
                      suffix: IconButton(
                        icon: isVis
                            ? const Icon(Icons.visibility)
                            : const Icon(Icons.visibility_off),
                        onPressed: () {
                          changeVis();
                        },
                      ),
                      border: const OutlineInputBorder()),
                  controller: _passwordController,
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Password is empty';
                    } else if (!RegExp(r"^.{6,}$").hasMatch(value)) {
                      return 'Password not valid(Min. 8 Character)';
                    }
                    return null;
                  },
                ),
                const SizedBox(
                  height: 15,
                ),
                MaterialButton(
                  onPressed: () async {
                    if (_formKey.currentState!.validate()) {
                      try {
                        await auth.signInWithEmailAndPassword(
                          email: _emailController.text,
                          password: _passwordController.text,
                        );
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const Chat(),
                            ));
                      } on FirebaseAuthException catch (error) {
                        if (error.code == "invalid-credential") {
                          print("Email or pass not found");
                        }
                      }
                    }
                  },
                  child: Container(
                    decoration: BoxDecoration(
                        color: Colors.amber,
                        borderRadius: BorderRadius.circular(5)),
                    width: double.infinity,
                    child: const Padding(
                      padding: EdgeInsets.all(10.0),
                      child: Center(child: Text("login")),
                    ),
                  ),
                ),
                const SizedBox(
                  height: 15,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const SizedBox(
                      width: 5,
                    ),
                    TextButton(
                        onPressed: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => const Reg(),
                              ));
                        },
                        child: const Text("Regester"))
                  ],
                ),
                TextButton(
                    onPressed: () {}, child: const Text("Forget Password?"))
              ]),
            ),
          ),
        ));
  }
}