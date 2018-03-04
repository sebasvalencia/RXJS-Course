

// Define the observer type
export interface Observer {
    notify(data: any);
}

// Define the subject interface
interface Subject {
    registerObserver(obs: Observer);
    unregisterObserver(obs: Observer);
    notifyObservers(data: any);
}

// Define global event for the app
class EventBus implements Subject {

    // observerCollection
    private observer: Observer[] = [];

    registerObserver(obs: Observer) {
        this.observer.push(obs);
    }

    unregisterObserver(obs: Observer) {

    }
    notifyObservers(data: any) {

    }

}


