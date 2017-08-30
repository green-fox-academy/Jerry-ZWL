(ns exercises-cljs.core
    (:require ))

(enable-console-print!)

(println "This text is printed from src/exercises-cljs/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
   (swap! app-state update-in [:__figwheel_counter] inc)
)
;;;1111111111111111
(defn multiple? [x & factors]
  (some zero? (map #(rem x %) factors)))
;map function

; ;; efficient dynamic binding
; (def ^:dynamic x 5)
; (binding [x 10]
;  (println x)) ;; => 10
; (println x) ;; => 5
;mutable variable 

; // can dynamic bind by putting
; // object in scope chain
; // performance implications
 
; var x = 5;
; var obj = {
;   x: 10
; }; 
; with(obj) {
;   console.log(x); // => 10
; } 
; console.log(x); // => 5
(def ^:dynamic out3)

(defn mutations [d time]
  (cond
    (and (<= time 200) (multiple? d 4))
      (binding [out3 "check"] (println out3))
    (> time 200) (binding [out3 "Time out"] (println out3))
    :else (binding [out3 "Run Forest Run!"] (println out3))))

(mutations 8 120)    
;2222222222 IO
(defn trains [times]  
  (loop [i 0]
    (if (< i times)
    (do (println "I like tranis!")
        (recur (inc i))))))
(trains 100)

;3333333333333333333333333 Math/Caculation
(println  (filter #(even? %) (range 501)))

;4444444444444444444444444
(defn multiple [stop]
  (loop [i 1]
    (if (<= i stop)
      (do (println i "*" 15 "=" (* i 15))
          (recur (inc i))))))

(multiple 10)        
  
;55555555555555555555555555
(defn fizzbuzz [start end]
  (let[start start
        end  (inc end)
        list (range start end)]
        (reduce 
          (fn [pre cur]
            (cond 
              (multiple? cur 3) (conj pre "Fizz")
              (multiple? cur 5) (conj pre "Buzz")
              (and (multiple? cur 5) (multiple? cur 3))
              (conj pre "FizzBuzz")
              :else (conj pre cur)))
             [] list)))  

(println (clojure.string/join ""(fizzbuzz 1 100)))


;6666666666666666666666
(defn stars [num]
  (apply str (repeat num "*")))

(defn spaces [num]
  (apply str (repeat num " ")))  

(defn symbol-fill [symbol num]
  (apply str (repeat num symbol)))    

(defn triangle [line]
  (let [list (range 1 (inc line))]
    (reduce 
      (fn [pre cur]
        (conj pre (stars cur) "\n"))
        [] list)))

(println (apply str (triangle 6)))        


;;77777777777777777777
(defn draw-list [list line]
  (reduce 
    (fn [pre cur]
      (conj pre 
        (apply str (concat (spaces (- line cur))(stars (dec (* 2 cur))))) 
          "\n"))
      [] list))



(defn pyrimid [line]
  (let [list (range 1 (inc line))]
   (draw-list list line)))


(println (apply str (pyrimid 6)))

;888888888888888888

(defn diamond [line]
(let [ceil (Math.ceil (/ line 2))
      even (range 1 (inc ceil))
      odd (range 1 ceil)]
  (cond
    (multiple? line 2) 
      (let [list (concat even (reverse even))] (draw-list list line))
    :else (let [list (concat even (reverse odd))] (draw-list list line)))))  

(println (apply str (diamond 8)))

;9999999999999999999
(defn square [line]
    (let [list (take line (repeat line))
          list-index (map-indexed vector list)
          _ (println list list-index)]
      (reduce 
        (fn [pre cur]
          (if (or (= 0 (first cur)) (= (dec line) (first cur)))
           (conj pre (symbol-fill "%" (second cur)) "\n")
           (conj pre "%" (symbol-fill " " (dec(dec (second cur)))) "%" "\n")))
         [] list-index )))

(println (apply str (square 6)))